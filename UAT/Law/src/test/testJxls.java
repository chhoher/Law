package test;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.jxls.common.Context;
import org.jxls.util.JxlsHelper;

import com.myjs.cek.recordcheckform.model.LCekRecordSigned;

public class testJxls {

	public static void main(String[] args)  throws ParseException, IOException {
		List<LCekRecordSigned> LCekRecordSigned = new ArrayList<LCekRecordSigned>();
		LCekRecordSigned LCekRecordSigned1 = new LCekRecordSigned(null , 2740584, "京城銀行", "京城銀行信用卡_Y2", "張淑茹",
				"CM", "分期清償", 10, new Date(), new Date(), 25000,
				250000, new Date(), 0, "", "00345",
				"123124", new Date(),"jia","jia",
				"y", "");
		LCekRecordSigned.add(LCekRecordSigned1);
			try(InputStream is = new FileInputStream("C:\\Users\\2354\\workspace\\Legal\\.metadata\\.plugins\\org.eclipse.wst.server.core\\tmp1\\wtpwebapps\\Law\\upload\\20170616101920\\【京城】簽呈套表Template.xls")) {
				
            try (OutputStream os = new FileOutputStream("C:\\Users\\2354\\workspace\\Legal\\.metadata\\.plugins\\org.eclipse.wst.server.core\\tmp1\\wtpwebapps\\Law\\upload\\20170616101920\\" + "object_collection_output.xls")) {
                Context context = new Context();
                context.putVar("LCekRecordSigned", LCekRecordSigned);
                JxlsHelper.getInstance().processTemplate(is, os, context);
            }catch(Exception e){
            	e.printStackTrace();
            }
        }
	}

}
