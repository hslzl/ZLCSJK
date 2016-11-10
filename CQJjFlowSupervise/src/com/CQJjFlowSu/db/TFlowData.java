package com.CQJjFlowSu.db;

public class TFlowData {
    private String fId;

    private String fFlowId;

    private String fIp;

    private String fStatus;

    private String fReceiveDate;

    private String fData;

    private String fElectri;

    public String getfId() {
        return fId;
    }

    public void setfId(String fId) {
        this.fId = fId == null ? null : fId.trim();
    }

    public String getfFlowId() {
        return fFlowId;
    }

    public void setfFlowId(String fFlowId) {
        this.fFlowId = fFlowId == null ? null : fFlowId.trim();
    }

    public String getfIp() {
        return fIp;
    }

    public void setfIp(String fIp) {
        this.fIp = fIp == null ? null : fIp.trim();
    }

    public String getfStatus() {
        return fStatus;
    }

    public void setfStatus(String fStatus) {
        this.fStatus = fStatus == null ? null : fStatus.trim();
    }

    public String getfReceiveDate() {
        return fReceiveDate;
    }

    public void setfReceiveDate(String fReceiveDate) {
        this.fReceiveDate = fReceiveDate == null ? null : fReceiveDate.trim();
    }

    public String getfData() {
        return fData;
    }

    public void setfData(String fData) {
        this.fData = fData == null ? null : fData.trim();
    }

    public String getfElectri() {
        return fElectri;
    }

    public void setfElectri(String fElectri) {
        this.fElectri = fElectri == null ? null : fElectri.trim();
    }
}