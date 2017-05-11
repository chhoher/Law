package com.myjs.commons;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import javax.servlet.http.HttpServletRequest;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.commons.io.FileUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;


import java.util.*;
 
public class FilesUploads {
	private static final Logger log = LogManager.getLogger(FilesUploads.class);
    private int buffersize = 4096;
    private int SizeMax = 1024 * 1024;// 1Mbyte最大檔案大小
    private File tempfile = null;
    private String def_upload_dir = null;
 
    // 用來存parameter
    private Map map = null;
    private Map uploadlist = null;
 
    public FilesUploads(){
    	
    }
    
    // 處始化時把給request把所有的值取出,存入map
    public FilesUploads(HttpServletRequest request) throws FileUploadException,
            UnsupportedEncodingException {
 
        map = new HashMap();
        uploadlist = new HashMap();
 
        // 建立一個以disk-base的檔案物件
        DiskFileItemFactory factory = new DiskFileItemFactory();
 
        // 初始化內容
        // 傳送所用的buffer空間
        factory.setSizeThreshold(buffersize);
        // The directory in which temporary files will be located.
 
        factory.setRepository(tempfile);
 
        // 建立一個檔案上傳的物件
        ServletFileUpload upload = new ServletFileUpload(factory);
 
        // 最大檔案大小
        upload.setSizeMax(SizeMax * 10);
 
        // 每一個Fileitem代表一個form上傳的物件內容ex input type="text"
        List items = null; // 會產生 FileUploadException
        // 把資料從request取出
        items = upload.parseRequest(request); // Parse the request
 
        Iterator iter = items.iterator();
 
        while (iter.hasNext()) {// 先把所有參數取得而不先write to file
            FileItem item = (FileItem) iter.next();
            // 一般文字欄位
            if (item.isFormField()) {
                map.put(item.getFieldName(), item.getString("Big5"));
                System.out.println("上傳檔案的其它參數:" + item.getFieldName() + "="
                        + item.getString("Big5"));
            } else {// 上傳檔案欄位
                // or it's a file upload request
 
                if (item.getSize() > 0) {
                    uploadlist.put(item.getFieldName(), item);
                    System.out.println("上傳檔案:" + item.getFieldName());
                }
            }
        }
    }
 
    // 設定檔案上傳後存放的地方
    public void setUploadDir(String upload_dir) {
        this.def_upload_dir = upload_dir;
    }
 
    // 取得所有欄位,包含一般欄位及上傳的欄位
    public Map getAllParameter() {
        Map rvalue = new HashMap();
        rvalue.putAll(map);
        rvalue.putAll(uploadlist);
        return rvalue;
    }
 
    // 取得某一欄位的值,一般欄位
    public String getParameter(String FieldName) {
        if (map.containsKey(FieldName))
            return String.valueOf(map.get(FieldName));
        else
            return null;
    }
 
    // 取得某一欄位的值,上傳欄位
    public FileItem getUploadParameter(String FieldName) {
        if (uploadlist.containsKey(FieldName))
            return (FileItem) uploadlist.get(FieldName);
        else
            return null;
    }
 
    // 檢查上傳資料是否正確
    public String checkUpload() {
        Iterator iter = uploadlist.keySet().iterator();
        while (iter.hasNext()) {
            Object Name = iter.next();
            FileItem item = (FileItem) uploadlist.get(Name);
            String itename = item.getName();
            System.out.println("上傳的檔案為:" + itename);
            if (item.getSize() > SizeMax)
                return "檔案太大!";
        }
        return "";
    }
 
    // 開始上傳
    public String doUpload(FileItem item, String fileName) {
        String str = "";
        long sizeInBytes = item.getSize();
        // 碓認上傳資料是否有誤
        if (sizeInBytes > SizeMax)
            return "檔案太大!";
 
        if (sizeInBytes > 0) {
 
            int index = -1;
            String itename = null;
            if ((index = item.getName().lastIndexOf("\\")) != -1)
                itename = item.getName().substring(index,
                        item.getName().length());
            else
                itename = item.getName();
            // 副檔名
            String formatName = itename.substring(itename.length() - 4,
                    itename.length());
 
            fileName = (fileName + formatName).toLowerCase();
 
            System.out.println("上傳檔案檔案名稱:" + fileName);
 
            File uploadedFile = new File(def_upload_dir + fileName);
            // 會產生 Exception
            try {
                item.write(uploadedFile);
 
            } catch (Exception e) {
                System.out.println("上傳失敗!" + e.toString());
                str = "上傳失敗!";
            }
            // 會產生 Exception
 
        }
        return str;
    }
 
    // 是否存在此上傳欄位資料
 
    public boolean isExtUpload(String fileName) {
        return uploadlist.containsKey(fileName);
    }
    
    private static final int BUFFER_SIZE = 16 * 1024;

	/**
	 * 把文件複制到另外一個地方
	 * @param src 源文件 包括路徑
	 * @param dst 目標文件 包括路徑
	 * @param BUFFER_SIZE 文件大小
	 * @throws Exception
	 */
	public static void copyFile(File src, File dst) throws Exception{
		
		if(src == null || dst == null ){
			throw new IllegalArgumentException(" the file is empty");			
		}
		
        InputStream in = null;
        OutputStream out = null;
        try {
        	System.out.println(dst.exists());
        	dst.mkdirs();
        	System.out.println(dst.isFile());
        	if(!dst.isFile()){
        		dst.delete();
        		dst.createNewFile();
        	}
        	in = new BufferedInputStream(new FileInputStream(src), BUFFER_SIZE);
            out = new BufferedOutputStream(new FileOutputStream(dst),
                    BUFFER_SIZE );
            byte[] buffer = new byte[BUFFER_SIZE];
            int len = 0;
            while ((len = in.read(buffer)) > 0) {
                out.write(buffer, 0, len);
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        } finally {
            if (null != in) {
                try {
                    in.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            if (null != out) {
                try {
                    out.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
	
	/**
	 * 檔案上傳Function 
	 * @param UploadFile 來源檔案
	 * @param path 上傳目的地
	 * @return
	 */
	public boolean fileUpload(File[] UploadFile, String path, String fileName){
		
		boolean IsUpload = false;
		//根據路徑名創建一個文件
		File file = new File(path);

		//判斷file是否存在，如果不存在，則自動創建一個
		if(!file.exists()){
			file.mkdirs();
		}
        
		//通過調用copyFile()方法將指定的文件copy到指定的路徑中
		try {
			String fileNames[] = fileName.split(",");
			if(UploadFile.length > 0){
				for(int i = 0; i < UploadFile.length; i ++){
					log.debug("fileNames = {}", fileNames[i]);
					FileUtils.copyFile(UploadFile[i], new File(file, fileNames[i].trim()));
				}
			}else{
				FileUtils.copyFile(UploadFile[0], new File(file, fileName));
			}
			IsUpload = true;
		} catch (Exception e) {
			IsUpload = false;
			log.error("fileUpload error",e);
		}
		return IsUpload;
		
		}
}