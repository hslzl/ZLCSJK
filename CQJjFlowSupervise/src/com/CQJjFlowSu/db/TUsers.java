package com.CQJjFlowSu.db;

public class TUsers {
    private String fUserId;

    private String fUserName;

    private String fPassword;

    private String fDuty;

    public String getfUserId() {
        return fUserId;
    }

    public void setfUserId(String fUserId) {
        this.fUserId = fUserId == null ? null : fUserId.trim();
    }

    public String getfUserName() {
        return fUserName;
    }

    public void setfUserName(String fUserName) {
        this.fUserName = fUserName == null ? null : fUserName.trim();
    }

    public String getfPassword() {
        return fPassword;
    }

    public void setfPassword(String fPassword) {
        this.fPassword = fPassword == null ? null : fPassword.trim();
    }

    public String getfDuty() {
        return fDuty;
    }

    public void setfDuty(String fDuty) {
        this.fDuty = fDuty == null ? null : fDuty.trim();
    }
}