package com.CQJjFlowSu.db;

public class TFlow {
    private String fGuid;

    private String fBt;

    private Integer fLength;

    private String fSjbxu;

    private String fServerIp;

    private String fLocalhost;

    private String fType;

    private String fVersion;

    private String fOrder;

    private String fNetDate;

    private String fStatus;

    private String fEletri;

    private String fGprsLac;

    private Integer fDataNum;

    private String fCrc;

    public String getfGuid() {
        return fGuid;
    }

    public void setfGuid(String fGuid) {
        this.fGuid = fGuid == null ? null : fGuid.trim();
    }

    public String getfBt() {
        return fBt;
    }

    public void setfBt(String fBt) {
        this.fBt = fBt == null ? null : fBt.trim();
    }

    public Integer getfLength() {
        return fLength;
    }

    public void setfLength(Integer fLength) {
        this.fLength = fLength;
    }

    public String getfSjbxu() {
        return fSjbxu;
    }

    public void setfSjbxu(String fSjbxu) {
        this.fSjbxu = fSjbxu == null ? null : fSjbxu.trim();
    }

    public String getfServerIp() {
        return fServerIp;
    }

    public void setfServerIp(String fServerIp) {
        this.fServerIp = fServerIp == null ? null : fServerIp.trim();
    }

    public String getfLocalhost() {
        return fLocalhost;
    }

    public void setfLocalhost(String fLocalhost) {
        this.fLocalhost = fLocalhost == null ? null : fLocalhost.trim();
    }

    public String getfType() {
        return fType;
    }

    public void setfType(String fType) {
        this.fType = fType == null ? null : fType.trim();
    }

    public String getfVersion() {
        return fVersion;
    }

    public void setfVersion(String fVersion) {
        this.fVersion = fVersion == null ? null : fVersion.trim();
    }

    public String getfOrder() {
        return fOrder;
    }

    public void setfOrder(String fOrder) {
        this.fOrder = fOrder == null ? null : fOrder.trim();
    }

    public String getfNetDate() {
        return fNetDate;
    }

    public void setfNetDate(String fNetDate) {
        this.fNetDate = fNetDate == null ? null : fNetDate.trim();
    }

    public String getfStatus() {
        return fStatus;
    }

    public void setfStatus(String fStatus) {
        this.fStatus = fStatus == null ? null : fStatus.trim();
    }

    public String getfEletri() {
        return fEletri;
    }

    public void setfEletri(String fEletri) {
        this.fEletri = fEletri == null ? null : fEletri.trim();
    }

    public String getfGprsLac() {
        return fGprsLac;
    }

    public void setfGprsLac(String fGprsLac) {
        this.fGprsLac = fGprsLac == null ? null : fGprsLac.trim();
    }

    public Integer getfDataNum() {
        return fDataNum;
    }

    public void setfDataNum(Integer fDataNum) {
        this.fDataNum = fDataNum;
    }

    public String getfCrc() {
        return fCrc;
    }

    public void setfCrc(String fCrc) {
        this.fCrc = fCrc == null ? null : fCrc.trim();
    }
}