package com.myjs.sys.user.model;
import javax.persistence.Entity;
import javax.persistence.Table;
@Entity
@Table(name = "V_EIP_memdb", schema = "dbo", catalog = "Legal")
public class VEIPMemdb implements java.io.Serializable {

	private static final long serialVersionUID = -5541785323465934590L;
	private String userID;
	private String memno;
	private String memnm;
	private String membirth;
	private String memidno;
	private String memsex;
	private String memzon;
	private String mempos;
	private String posnm;
	private String memdep;
	private String mempwd;
	private String sdate;
	private String edate;
	private String memtmp;
	private String lastdate;
	private String lgtmp;
	private String thistime;
	private String agtno;
	private String holino;
	private String memobj;
	private String memmail;
	private String memtel;
	private String telext;
	private String memfax;
	private String memaddr;
	private String memadm;
	private String subpos;
	private String paytp;
	private String memmob;
	private String memup;
	private String up2003;
	private String memman;
	private String memhldt;
	private String admno1;
	private String admno2;
	private String admno3;
	private String SMSmob;
	private String SMSBirth;
	private String retnew;
	private String mememno;
	private String holi_Notice;
	private String Pro_period;
	
	public VEIPMemdb() {
	}

	public VEIPMemdb(String userID,String memno, String memnm, String membirth, String memidno, String memsex, String memzon, String mempos, String posnm, String memdep, String mempwd, String sdate, String edate, String memtmp, String lastdate,
			String lgtmp, String thistime, String agtno, String holino, String memobj, String memmail, String memtel, String telext, String memfax, String memaddr, String memadm, String subpos, String paytp, String memmob,
			String memup, String up2003, String memman, String memhldt, String admno1, String admno2, String admno3, String SMSmob, String SMSBirth, String retnew, String mememno, String holi_Notice, String Pro_period) {
		this.userID = userID;
		this.memno = memno;
	    this.memnm = memnm;
	    this.membirth = membirth;
	    this.memidno = memidno;
	    this.memsex = memsex;
	    this.memzon = memzon;
	    this.mempos = mempos;
	    this.posnm = posnm;
	    this.memdep = memdep;
	    this.mempwd = mempwd;
	    this.sdate = sdate;
	    this.edate = edate;
	    this.memtmp = memtmp;
	    this.lastdate = lastdate;
	    this.lgtmp = lgtmp;
	    this.thistime = thistime;
	    this.agtno = agtno;
	    this.holino = holino;
	    this.memobj = memobj;
	    this.memmail = memmail;
	    this.memtel = memtel;
	    this.telext = telext;
	    this.memfax = memfax;
	    this.memaddr = memaddr;
	    this.memadm = memadm;
	    this.subpos = subpos;
	    this.paytp = paytp;
	    this.memmob = memmob;
	    this.memup = memup;
	    this.up2003 = up2003;
	    this.memman = memman;
	    this.memhldt = memhldt;
	    this.admno1 = admno1;
	    this.admno2 = admno2;
	    this.admno3 = admno3;
	    this.SMSmob = SMSmob;
	    this.SMSBirth = SMSBirth;
	    this.retnew = retnew;
	    this.mememno = mememno;
	    this.holi_Notice = holi_Notice;
	    this.Pro_period = Pro_period;
	}

	public String getMemno() {
		return memno;
	}

	public void setMemno(String memno) {
		this.memno = memno;
	}

	public String getMemnm() {
		return memnm;
	}

	public void setMemnm(String memnm) {
		this.memnm = memnm;
	}

	public String getMembirth() {
		return membirth;
	}

	public void setMembirth(String membirth) {
		this.membirth = membirth;
	}

	public String getMemidno() {
		return memidno;
	}

	public void setMemidno(String memidno) {
		this.memidno = memidno;
	}

	public String getMemsex() {
		return memsex;
	}

	public void setMemsex(String memsex) {
		this.memsex = memsex;
	}

	public String getMemzon() {
		return memzon;
	}

	public void setMemzon(String memzon) {
		this.memzon = memzon;
	}

	public String getMempos() {
		return mempos;
	}

	public void setMempos(String mempos) {
		this.mempos = mempos;
	}

	public String getPosnm() {
		return posnm;
	}

	public void setPosnm(String posnm) {
		this.posnm = posnm;
	}

	public String getMemdep() {
		return memdep;
	}

	public void setMemdep(String memdep) {
		this.memdep = memdep;
	}

	public String getMempwd() {
		return mempwd;
	}

	public void setMempwd(String mempwd) {
		this.mempwd = mempwd;
	}

	public String getSdate() {
		return sdate;
	}

	public void setSdate(String sdate) {
		this.sdate = sdate;
	}

	public String getEdate() {
		return edate;
	}

	public void setEdate(String edate) {
		this.edate = edate;
	}

	public String getMemtmp() {
		return memtmp;
	}

	public void setMemtmp(String memtmp) {
		this.memtmp = memtmp;
	}

	public String getLastdate() {
		return lastdate;
	}

	public void setLastdate(String lastdate) {
		this.lastdate = lastdate;
	}

	public String getLgtmp() {
		return lgtmp;
	}

	public void setLgtmp(String lgtmp) {
		this.lgtmp = lgtmp;
	}

	public String getThistime() {
		return thistime;
	}

	public void setThistime(String thistime) {
		this.thistime = thistime;
	}

	public String getAgtno() {
		return agtno;
	}

	public void setAgtno(String agtno) {
		this.agtno = agtno;
	}

	public String getHolino() {
		return holino;
	}

	public void setHolino(String holino) {
		this.holino = holino;
	}

	public String getMemobj() {
		return memobj;
	}

	public void setMemobj(String memobj) {
		this.memobj = memobj;
	}

	public String getMemmail() {
		return memmail;
	}

	public void setMemmail(String memmail) {
		this.memmail = memmail;
	}

	public String getMemtel() {
		return memtel;
	}

	public void setMemtel(String memtel) {
		this.memtel = memtel;
	}

	public String getTelext() {
		return telext;
	}

	public void setTelext(String telext) {
		this.telext = telext;
	}

	public String getMemfax() {
		return memfax;
	}

	public void setMemfax(String memfax) {
		this.memfax = memfax;
	}

	public String getMemaddr() {
		return memaddr;
	}

	public void setMemaddr(String memaddr) {
		this.memaddr = memaddr;
	}

	public String getMemadm() {
		return memadm;
	}

	public void setMemadm(String memadm) {
		this.memadm = memadm;
	}

	public String getSubpos() {
		return subpos;
	}

	public void setSubpos(String subpos) {
		this.subpos = subpos;
	}

	public String getPaytp() {
		return paytp;
	}

	public void setPaytp(String paytp) {
		this.paytp = paytp;
	}

	public String getMemmob() {
		return memmob;
	}

	public void setMemmob(String memmob) {
		this.memmob = memmob;
	}

	public String getMemup() {
		return memup;
	}

	public void setMemup(String memup) {
		this.memup = memup;
	}

	public String getUp2003() {
		return up2003;
	}

	public void setUp2003(String up2003) {
		this.up2003 = up2003;
	}

	public String getMemman() {
		return memman;
	}

	public void setMemman(String memman) {
		this.memman = memman;
	}

	public String getMemhldt() {
		return memhldt;
	}

	public void setMemhldt(String memhldt) {
		this.memhldt = memhldt;
	}

	public String getAdmno1() {
		return admno1;
	}

	public void setAdmno1(String admno1) {
		this.admno1 = admno1;
	}

	public String getAdmno2() {
		return admno2;
	}

	public void setAdmno2(String admno2) {
		this.admno2 = admno2;
	}

	public String getAdmno3() {
		return admno3;
	}

	public void setAdmno3(String admno3) {
		this.admno3 = admno3;
	}

	public String getSMSmob() {
		return SMSmob;
	}

	public void setSMSmob(String sMSmob) {
		SMSmob = sMSmob;
	}

	public String getSMSBirth() {
		return SMSBirth;
	}

	public void setSMSBirth(String sMSBirth) {
		SMSBirth = sMSBirth;
	}

	public String getRetnew() {
		return retnew;
	}

	public void setRetnew(String retnew) {
		this.retnew = retnew;
	}

	public String getMememno() {
		return mememno;
	}

	public void setMememno(String mememno) {
		this.mememno = mememno;
	}

	public String getHoli_Notice() {
		return holi_Notice;
	}

	public void setHoli_Notice(String holi_Notice) {
		this.holi_Notice = holi_Notice;
	}

	public String getPro_period() {
		return Pro_period;
	}

	public void setPro_period(String pro_period) {
		Pro_period = pro_period;
	}

	public String getUserID() {
		return userID;
	}

	public void setUserID(String userID) {
		this.userID = userID;
	}


}
