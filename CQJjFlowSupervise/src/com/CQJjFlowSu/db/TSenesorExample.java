package com.CQJjFlowSu.db;

import java.util.ArrayList;
import java.util.List;

public class TSenesorExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public TSenesorExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andFGuidIsNull() {
            addCriterion("F_GUID is null");
            return (Criteria) this;
        }

        public Criteria andFGuidIsNotNull() {
            addCriterion("F_GUID is not null");
            return (Criteria) this;
        }

        public Criteria andFGuidEqualTo(String value) {
            addCriterion("F_GUID =", value, "fGuid");
            return (Criteria) this;
        }

        public Criteria andFGuidNotEqualTo(String value) {
            addCriterion("F_GUID <>", value, "fGuid");
            return (Criteria) this;
        }

        public Criteria andFGuidGreaterThan(String value) {
            addCriterion("F_GUID >", value, "fGuid");
            return (Criteria) this;
        }

        public Criteria andFGuidGreaterThanOrEqualTo(String value) {
            addCriterion("F_GUID >=", value, "fGuid");
            return (Criteria) this;
        }

        public Criteria andFGuidLessThan(String value) {
            addCriterion("F_GUID <", value, "fGuid");
            return (Criteria) this;
        }

        public Criteria andFGuidLessThanOrEqualTo(String value) {
            addCriterion("F_GUID <=", value, "fGuid");
            return (Criteria) this;
        }

        public Criteria andFGuidLike(String value) {
            addCriterion("F_GUID like", value, "fGuid");
            return (Criteria) this;
        }

        public Criteria andFGuidNotLike(String value) {
            addCriterion("F_GUID not like", value, "fGuid");
            return (Criteria) this;
        }

        public Criteria andFGuidIn(List<String> values) {
            addCriterion("F_GUID in", values, "fGuid");
            return (Criteria) this;
        }

        public Criteria andFGuidNotIn(List<String> values) {
            addCriterion("F_GUID not in", values, "fGuid");
            return (Criteria) this;
        }

        public Criteria andFGuidBetween(String value1, String value2) {
            addCriterion("F_GUID between", value1, value2, "fGuid");
            return (Criteria) this;
        }

        public Criteria andFGuidNotBetween(String value1, String value2) {
            addCriterion("F_GUID not between", value1, value2, "fGuid");
            return (Criteria) this;
        }

        public Criteria andFIdIsNull() {
            addCriterion("F_ID is null");
            return (Criteria) this;
        }

        public Criteria andFIdIsNotNull() {
            addCriterion("F_ID is not null");
            return (Criteria) this;
        }

        public Criteria andFIdEqualTo(String value) {
            addCriterion("F_ID =", value, "fId");
            return (Criteria) this;
        }

        public Criteria andFIdNotEqualTo(String value) {
            addCriterion("F_ID <>", value, "fId");
            return (Criteria) this;
        }

        public Criteria andFIdGreaterThan(String value) {
            addCriterion("F_ID >", value, "fId");
            return (Criteria) this;
        }

        public Criteria andFIdGreaterThanOrEqualTo(String value) {
            addCriterion("F_ID >=", value, "fId");
            return (Criteria) this;
        }

        public Criteria andFIdLessThan(String value) {
            addCriterion("F_ID <", value, "fId");
            return (Criteria) this;
        }

        public Criteria andFIdLessThanOrEqualTo(String value) {
            addCriterion("F_ID <=", value, "fId");
            return (Criteria) this;
        }

        public Criteria andFIdLike(String value) {
            addCriterion("F_ID like", value, "fId");
            return (Criteria) this;
        }

        public Criteria andFIdNotLike(String value) {
            addCriterion("F_ID not like", value, "fId");
            return (Criteria) this;
        }

        public Criteria andFIdIn(List<String> values) {
            addCriterion("F_ID in", values, "fId");
            return (Criteria) this;
        }

        public Criteria andFIdNotIn(List<String> values) {
            addCriterion("F_ID not in", values, "fId");
            return (Criteria) this;
        }

        public Criteria andFIdBetween(String value1, String value2) {
            addCriterion("F_ID between", value1, value2, "fId");
            return (Criteria) this;
        }

        public Criteria andFIdNotBetween(String value1, String value2) {
            addCriterion("F_ID not between", value1, value2, "fId");
            return (Criteria) this;
        }

        public Criteria andFXhIsNull() {
            addCriterion("F_XH is null");
            return (Criteria) this;
        }

        public Criteria andFXhIsNotNull() {
            addCriterion("F_XH is not null");
            return (Criteria) this;
        }

        public Criteria andFXhEqualTo(String value) {
            addCriterion("F_XH =", value, "fXh");
            return (Criteria) this;
        }

        public Criteria andFXhNotEqualTo(String value) {
            addCriterion("F_XH <>", value, "fXh");
            return (Criteria) this;
        }

        public Criteria andFXhGreaterThan(String value) {
            addCriterion("F_XH >", value, "fXh");
            return (Criteria) this;
        }

        public Criteria andFXhGreaterThanOrEqualTo(String value) {
            addCriterion("F_XH >=", value, "fXh");
            return (Criteria) this;
        }

        public Criteria andFXhLessThan(String value) {
            addCriterion("F_XH <", value, "fXh");
            return (Criteria) this;
        }

        public Criteria andFXhLessThanOrEqualTo(String value) {
            addCriterion("F_XH <=", value, "fXh");
            return (Criteria) this;
        }

        public Criteria andFXhLike(String value) {
            addCriterion("F_XH like", value, "fXh");
            return (Criteria) this;
        }

        public Criteria andFXhNotLike(String value) {
            addCriterion("F_XH not like", value, "fXh");
            return (Criteria) this;
        }

        public Criteria andFXhIn(List<String> values) {
            addCriterion("F_XH in", values, "fXh");
            return (Criteria) this;
        }

        public Criteria andFXhNotIn(List<String> values) {
            addCriterion("F_XH not in", values, "fXh");
            return (Criteria) this;
        }

        public Criteria andFXhBetween(String value1, String value2) {
            addCriterion("F_XH between", value1, value2, "fXh");
            return (Criteria) this;
        }

        public Criteria andFXhNotBetween(String value1, String value2) {
            addCriterion("F_XH not between", value1, value2, "fXh");
            return (Criteria) this;
        }

        public Criteria andFTypeIsNull() {
            addCriterion("F_TYPE is null");
            return (Criteria) this;
        }

        public Criteria andFTypeIsNotNull() {
            addCriterion("F_TYPE is not null");
            return (Criteria) this;
        }

        public Criteria andFTypeEqualTo(String value) {
            addCriterion("F_TYPE =", value, "fType");
            return (Criteria) this;
        }

        public Criteria andFTypeNotEqualTo(String value) {
            addCriterion("F_TYPE <>", value, "fType");
            return (Criteria) this;
        }

        public Criteria andFTypeGreaterThan(String value) {
            addCriterion("F_TYPE >", value, "fType");
            return (Criteria) this;
        }

        public Criteria andFTypeGreaterThanOrEqualTo(String value) {
            addCriterion("F_TYPE >=", value, "fType");
            return (Criteria) this;
        }

        public Criteria andFTypeLessThan(String value) {
            addCriterion("F_TYPE <", value, "fType");
            return (Criteria) this;
        }

        public Criteria andFTypeLessThanOrEqualTo(String value) {
            addCriterion("F_TYPE <=", value, "fType");
            return (Criteria) this;
        }

        public Criteria andFTypeLike(String value) {
            addCriterion("F_TYPE like", value, "fType");
            return (Criteria) this;
        }

        public Criteria andFTypeNotLike(String value) {
            addCriterion("F_TYPE not like", value, "fType");
            return (Criteria) this;
        }

        public Criteria andFTypeIn(List<String> values) {
            addCriterion("F_TYPE in", values, "fType");
            return (Criteria) this;
        }

        public Criteria andFTypeNotIn(List<String> values) {
            addCriterion("F_TYPE not in", values, "fType");
            return (Criteria) this;
        }

        public Criteria andFTypeBetween(String value1, String value2) {
            addCriterion("F_TYPE between", value1, value2, "fType");
            return (Criteria) this;
        }

        public Criteria andFTypeNotBetween(String value1, String value2) {
            addCriterion("F_TYPE not between", value1, value2, "fType");
            return (Criteria) this;
        }

        public Criteria andFJdIsNull() {
            addCriterion("F_JD is null");
            return (Criteria) this;
        }

        public Criteria andFJdIsNotNull() {
            addCriterion("F_JD is not null");
            return (Criteria) this;
        }

        public Criteria andFJdEqualTo(String value) {
            addCriterion("F_JD =", value, "fJd");
            return (Criteria) this;
        }

        public Criteria andFJdNotEqualTo(String value) {
            addCriterion("F_JD <>", value, "fJd");
            return (Criteria) this;
        }

        public Criteria andFJdGreaterThan(String value) {
            addCriterion("F_JD >", value, "fJd");
            return (Criteria) this;
        }

        public Criteria andFJdGreaterThanOrEqualTo(String value) {
            addCriterion("F_JD >=", value, "fJd");
            return (Criteria) this;
        }

        public Criteria andFJdLessThan(String value) {
            addCriterion("F_JD <", value, "fJd");
            return (Criteria) this;
        }

        public Criteria andFJdLessThanOrEqualTo(String value) {
            addCriterion("F_JD <=", value, "fJd");
            return (Criteria) this;
        }

        public Criteria andFJdLike(String value) {
            addCriterion("F_JD like", value, "fJd");
            return (Criteria) this;
        }

        public Criteria andFJdNotLike(String value) {
            addCriterion("F_JD not like", value, "fJd");
            return (Criteria) this;
        }

        public Criteria andFJdIn(List<String> values) {
            addCriterion("F_JD in", values, "fJd");
            return (Criteria) this;
        }

        public Criteria andFJdNotIn(List<String> values) {
            addCriterion("F_JD not in", values, "fJd");
            return (Criteria) this;
        }

        public Criteria andFJdBetween(String value1, String value2) {
            addCriterion("F_JD between", value1, value2, "fJd");
            return (Criteria) this;
        }

        public Criteria andFJdNotBetween(String value1, String value2) {
            addCriterion("F_JD not between", value1, value2, "fJd");
            return (Criteria) this;
        }

        public Criteria andFWdIsNull() {
            addCriterion("F_WD is null");
            return (Criteria) this;
        }

        public Criteria andFWdIsNotNull() {
            addCriterion("F_WD is not null");
            return (Criteria) this;
        }

        public Criteria andFWdEqualTo(String value) {
            addCriterion("F_WD =", value, "fWd");
            return (Criteria) this;
        }

        public Criteria andFWdNotEqualTo(String value) {
            addCriterion("F_WD <>", value, "fWd");
            return (Criteria) this;
        }

        public Criteria andFWdGreaterThan(String value) {
            addCriterion("F_WD >", value, "fWd");
            return (Criteria) this;
        }

        public Criteria andFWdGreaterThanOrEqualTo(String value) {
            addCriterion("F_WD >=", value, "fWd");
            return (Criteria) this;
        }

        public Criteria andFWdLessThan(String value) {
            addCriterion("F_WD <", value, "fWd");
            return (Criteria) this;
        }

        public Criteria andFWdLessThanOrEqualTo(String value) {
            addCriterion("F_WD <=", value, "fWd");
            return (Criteria) this;
        }

        public Criteria andFWdLike(String value) {
            addCriterion("F_WD like", value, "fWd");
            return (Criteria) this;
        }

        public Criteria andFWdNotLike(String value) {
            addCriterion("F_WD not like", value, "fWd");
            return (Criteria) this;
        }

        public Criteria andFWdIn(List<String> values) {
            addCriterion("F_WD in", values, "fWd");
            return (Criteria) this;
        }

        public Criteria andFWdNotIn(List<String> values) {
            addCriterion("F_WD not in", values, "fWd");
            return (Criteria) this;
        }

        public Criteria andFWdBetween(String value1, String value2) {
            addCriterion("F_WD between", value1, value2, "fWd");
            return (Criteria) this;
        }

        public Criteria andFWdNotBetween(String value1, String value2) {
            addCriterion("F_WD not between", value1, value2, "fWd");
            return (Criteria) this;
        }

        public Criteria andFStatusIsNull() {
            addCriterion("F_STATUS is null");
            return (Criteria) this;
        }

        public Criteria andFStatusIsNotNull() {
            addCriterion("F_STATUS is not null");
            return (Criteria) this;
        }

        public Criteria andFStatusEqualTo(String value) {
            addCriterion("F_STATUS =", value, "fStatus");
            return (Criteria) this;
        }

        public Criteria andFStatusNotEqualTo(String value) {
            addCriterion("F_STATUS <>", value, "fStatus");
            return (Criteria) this;
        }

        public Criteria andFStatusGreaterThan(String value) {
            addCriterion("F_STATUS >", value, "fStatus");
            return (Criteria) this;
        }

        public Criteria andFStatusGreaterThanOrEqualTo(String value) {
            addCriterion("F_STATUS >=", value, "fStatus");
            return (Criteria) this;
        }

        public Criteria andFStatusLessThan(String value) {
            addCriterion("F_STATUS <", value, "fStatus");
            return (Criteria) this;
        }

        public Criteria andFStatusLessThanOrEqualTo(String value) {
            addCriterion("F_STATUS <=", value, "fStatus");
            return (Criteria) this;
        }

        public Criteria andFStatusLike(String value) {
            addCriterion("F_STATUS like", value, "fStatus");
            return (Criteria) this;
        }

        public Criteria andFStatusNotLike(String value) {
            addCriterion("F_STATUS not like", value, "fStatus");
            return (Criteria) this;
        }

        public Criteria andFStatusIn(List<String> values) {
            addCriterion("F_STATUS in", values, "fStatus");
            return (Criteria) this;
        }

        public Criteria andFStatusNotIn(List<String> values) {
            addCriterion("F_STATUS not in", values, "fStatus");
            return (Criteria) this;
        }

        public Criteria andFStatusBetween(String value1, String value2) {
            addCriterion("F_STATUS between", value1, value2, "fStatus");
            return (Criteria) this;
        }

        public Criteria andFStatusNotBetween(String value1, String value2) {
            addCriterion("F_STATUS not between", value1, value2, "fStatus");
            return (Criteria) this;
        }

        public Criteria andFInstallDateIsNull() {
            addCriterion("F_INSTALL_DATE is null");
            return (Criteria) this;
        }

        public Criteria andFInstallDateIsNotNull() {
            addCriterion("F_INSTALL_DATE is not null");
            return (Criteria) this;
        }

        public Criteria andFInstallDateEqualTo(String value) {
            addCriterion("F_INSTALL_DATE =", value, "fInstallDate");
            return (Criteria) this;
        }

        public Criteria andFInstallDateNotEqualTo(String value) {
            addCriterion("F_INSTALL_DATE <>", value, "fInstallDate");
            return (Criteria) this;
        }

        public Criteria andFInstallDateGreaterThan(String value) {
            addCriterion("F_INSTALL_DATE >", value, "fInstallDate");
            return (Criteria) this;
        }

        public Criteria andFInstallDateGreaterThanOrEqualTo(String value) {
            addCriterion("F_INSTALL_DATE >=", value, "fInstallDate");
            return (Criteria) this;
        }

        public Criteria andFInstallDateLessThan(String value) {
            addCriterion("F_INSTALL_DATE <", value, "fInstallDate");
            return (Criteria) this;
        }

        public Criteria andFInstallDateLessThanOrEqualTo(String value) {
            addCriterion("F_INSTALL_DATE <=", value, "fInstallDate");
            return (Criteria) this;
        }

        public Criteria andFInstallDateLike(String value) {
            addCriterion("F_INSTALL_DATE like", value, "fInstallDate");
            return (Criteria) this;
        }

        public Criteria andFInstallDateNotLike(String value) {
            addCriterion("F_INSTALL_DATE not like", value, "fInstallDate");
            return (Criteria) this;
        }

        public Criteria andFInstallDateIn(List<String> values) {
            addCriterion("F_INSTALL_DATE in", values, "fInstallDate");
            return (Criteria) this;
        }

        public Criteria andFInstallDateNotIn(List<String> values) {
            addCriterion("F_INSTALL_DATE not in", values, "fInstallDate");
            return (Criteria) this;
        }

        public Criteria andFInstallDateBetween(String value1, String value2) {
            addCriterion("F_INSTALL_DATE between", value1, value2, "fInstallDate");
            return (Criteria) this;
        }

        public Criteria andFInstallDateNotBetween(String value1, String value2) {
            addCriterion("F_INSTALL_DATE not between", value1, value2, "fInstallDate");
            return (Criteria) this;
        }

        public Criteria andFRepairDateIsNull() {
            addCriterion("F_REPAIR_DATE is null");
            return (Criteria) this;
        }

        public Criteria andFRepairDateIsNotNull() {
            addCriterion("F_REPAIR_DATE is not null");
            return (Criteria) this;
        }

        public Criteria andFRepairDateEqualTo(String value) {
            addCriterion("F_REPAIR_DATE =", value, "fRepairDate");
            return (Criteria) this;
        }

        public Criteria andFRepairDateNotEqualTo(String value) {
            addCriterion("F_REPAIR_DATE <>", value, "fRepairDate");
            return (Criteria) this;
        }

        public Criteria andFRepairDateGreaterThan(String value) {
            addCriterion("F_REPAIR_DATE >", value, "fRepairDate");
            return (Criteria) this;
        }

        public Criteria andFRepairDateGreaterThanOrEqualTo(String value) {
            addCriterion("F_REPAIR_DATE >=", value, "fRepairDate");
            return (Criteria) this;
        }

        public Criteria andFRepairDateLessThan(String value) {
            addCriterion("F_REPAIR_DATE <", value, "fRepairDate");
            return (Criteria) this;
        }

        public Criteria andFRepairDateLessThanOrEqualTo(String value) {
            addCriterion("F_REPAIR_DATE <=", value, "fRepairDate");
            return (Criteria) this;
        }

        public Criteria andFRepairDateLike(String value) {
            addCriterion("F_REPAIR_DATE like", value, "fRepairDate");
            return (Criteria) this;
        }

        public Criteria andFRepairDateNotLike(String value) {
            addCriterion("F_REPAIR_DATE not like", value, "fRepairDate");
            return (Criteria) this;
        }

        public Criteria andFRepairDateIn(List<String> values) {
            addCriterion("F_REPAIR_DATE in", values, "fRepairDate");
            return (Criteria) this;
        }

        public Criteria andFRepairDateNotIn(List<String> values) {
            addCriterion("F_REPAIR_DATE not in", values, "fRepairDate");
            return (Criteria) this;
        }

        public Criteria andFRepairDateBetween(String value1, String value2) {
            addCriterion("F_REPAIR_DATE between", value1, value2, "fRepairDate");
            return (Criteria) this;
        }

        public Criteria andFRepairDateNotBetween(String value1, String value2) {
            addCriterion("F_REPAIR_DATE not between", value1, value2, "fRepairDate");
            return (Criteria) this;
        }

        public Criteria andFElectricIsNull() {
            addCriterion("F_ELECTRIC is null");
            return (Criteria) this;
        }

        public Criteria andFElectricIsNotNull() {
            addCriterion("F_ELECTRIC is not null");
            return (Criteria) this;
        }

        public Criteria andFElectricEqualTo(String value) {
            addCriterion("F_ELECTRIC =", value, "fElectric");
            return (Criteria) this;
        }

        public Criteria andFElectricNotEqualTo(String value) {
            addCriterion("F_ELECTRIC <>", value, "fElectric");
            return (Criteria) this;
        }

        public Criteria andFElectricGreaterThan(String value) {
            addCriterion("F_ELECTRIC >", value, "fElectric");
            return (Criteria) this;
        }

        public Criteria andFElectricGreaterThanOrEqualTo(String value) {
            addCriterion("F_ELECTRIC >=", value, "fElectric");
            return (Criteria) this;
        }

        public Criteria andFElectricLessThan(String value) {
            addCriterion("F_ELECTRIC <", value, "fElectric");
            return (Criteria) this;
        }

        public Criteria andFElectricLessThanOrEqualTo(String value) {
            addCriterion("F_ELECTRIC <=", value, "fElectric");
            return (Criteria) this;
        }

        public Criteria andFElectricLike(String value) {
            addCriterion("F_ELECTRIC like", value, "fElectric");
            return (Criteria) this;
        }

        public Criteria andFElectricNotLike(String value) {
            addCriterion("F_ELECTRIC not like", value, "fElectric");
            return (Criteria) this;
        }

        public Criteria andFElectricIn(List<String> values) {
            addCriterion("F_ELECTRIC in", values, "fElectric");
            return (Criteria) this;
        }

        public Criteria andFElectricNotIn(List<String> values) {
            addCriterion("F_ELECTRIC not in", values, "fElectric");
            return (Criteria) this;
        }

        public Criteria andFElectricBetween(String value1, String value2) {
            addCriterion("F_ELECTRIC between", value1, value2, "fElectric");
            return (Criteria) this;
        }

        public Criteria andFElectricNotBetween(String value1, String value2) {
            addCriterion("F_ELECTRIC not between", value1, value2, "fElectric");
            return (Criteria) this;
        }

        public Criteria andFLastDataTimeIsNull() {
            addCriterion("F_LAST_DATA_TIME is null");
            return (Criteria) this;
        }

        public Criteria andFLastDataTimeIsNotNull() {
            addCriterion("F_LAST_DATA_TIME is not null");
            return (Criteria) this;
        }

        public Criteria andFLastDataTimeEqualTo(String value) {
            addCriterion("F_LAST_DATA_TIME =", value, "fLastDataTime");
            return (Criteria) this;
        }

        public Criteria andFLastDataTimeNotEqualTo(String value) {
            addCriterion("F_LAST_DATA_TIME <>", value, "fLastDataTime");
            return (Criteria) this;
        }

        public Criteria andFLastDataTimeGreaterThan(String value) {
            addCriterion("F_LAST_DATA_TIME >", value, "fLastDataTime");
            return (Criteria) this;
        }

        public Criteria andFLastDataTimeGreaterThanOrEqualTo(String value) {
            addCriterion("F_LAST_DATA_TIME >=", value, "fLastDataTime");
            return (Criteria) this;
        }

        public Criteria andFLastDataTimeLessThan(String value) {
            addCriterion("F_LAST_DATA_TIME <", value, "fLastDataTime");
            return (Criteria) this;
        }

        public Criteria andFLastDataTimeLessThanOrEqualTo(String value) {
            addCriterion("F_LAST_DATA_TIME <=", value, "fLastDataTime");
            return (Criteria) this;
        }

        public Criteria andFLastDataTimeLike(String value) {
            addCriterion("F_LAST_DATA_TIME like", value, "fLastDataTime");
            return (Criteria) this;
        }

        public Criteria andFLastDataTimeNotLike(String value) {
            addCriterion("F_LAST_DATA_TIME not like", value, "fLastDataTime");
            return (Criteria) this;
        }

        public Criteria andFLastDataTimeIn(List<String> values) {
            addCriterion("F_LAST_DATA_TIME in", values, "fLastDataTime");
            return (Criteria) this;
        }

        public Criteria andFLastDataTimeNotIn(List<String> values) {
            addCriterion("F_LAST_DATA_TIME not in", values, "fLastDataTime");
            return (Criteria) this;
        }

        public Criteria andFLastDataTimeBetween(String value1, String value2) {
            addCriterion("F_LAST_DATA_TIME between", value1, value2, "fLastDataTime");
            return (Criteria) this;
        }

        public Criteria andFLastDataTimeNotBetween(String value1, String value2) {
            addCriterion("F_LAST_DATA_TIME not between", value1, value2, "fLastDataTime");
            return (Criteria) this;
        }

        public Criteria andFSimNumberIsNull() {
            addCriterion("F_SIM_NUMBER is null");
            return (Criteria) this;
        }

        public Criteria andFSimNumberIsNotNull() {
            addCriterion("F_SIM_NUMBER is not null");
            return (Criteria) this;
        }

        public Criteria andFSimNumberEqualTo(String value) {
            addCriterion("F_SIM_NUMBER =", value, "fSimNumber");
            return (Criteria) this;
        }

        public Criteria andFSimNumberNotEqualTo(String value) {
            addCriterion("F_SIM_NUMBER <>", value, "fSimNumber");
            return (Criteria) this;
        }

        public Criteria andFSimNumberGreaterThan(String value) {
            addCriterion("F_SIM_NUMBER >", value, "fSimNumber");
            return (Criteria) this;
        }

        public Criteria andFSimNumberGreaterThanOrEqualTo(String value) {
            addCriterion("F_SIM_NUMBER >=", value, "fSimNumber");
            return (Criteria) this;
        }

        public Criteria andFSimNumberLessThan(String value) {
            addCriterion("F_SIM_NUMBER <", value, "fSimNumber");
            return (Criteria) this;
        }

        public Criteria andFSimNumberLessThanOrEqualTo(String value) {
            addCriterion("F_SIM_NUMBER <=", value, "fSimNumber");
            return (Criteria) this;
        }

        public Criteria andFSimNumberLike(String value) {
            addCriterion("F_SIM_NUMBER like", value, "fSimNumber");
            return (Criteria) this;
        }

        public Criteria andFSimNumberNotLike(String value) {
            addCriterion("F_SIM_NUMBER not like", value, "fSimNumber");
            return (Criteria) this;
        }

        public Criteria andFSimNumberIn(List<String> values) {
            addCriterion("F_SIM_NUMBER in", values, "fSimNumber");
            return (Criteria) this;
        }

        public Criteria andFSimNumberNotIn(List<String> values) {
            addCriterion("F_SIM_NUMBER not in", values, "fSimNumber");
            return (Criteria) this;
        }

        public Criteria andFSimNumberBetween(String value1, String value2) {
            addCriterion("F_SIM_NUMBER between", value1, value2, "fSimNumber");
            return (Criteria) this;
        }

        public Criteria andFSimNumberNotBetween(String value1, String value2) {
            addCriterion("F_SIM_NUMBER not between", value1, value2, "fSimNumber");
            return (Criteria) this;
        }

        public Criteria andFOperatorIsNull() {
            addCriterion("F_OPERATOR is null");
            return (Criteria) this;
        }

        public Criteria andFOperatorIsNotNull() {
            addCriterion("F_OPERATOR is not null");
            return (Criteria) this;
        }

        public Criteria andFOperatorEqualTo(String value) {
            addCriterion("F_OPERATOR =", value, "fOperator");
            return (Criteria) this;
        }

        public Criteria andFOperatorNotEqualTo(String value) {
            addCriterion("F_OPERATOR <>", value, "fOperator");
            return (Criteria) this;
        }

        public Criteria andFOperatorGreaterThan(String value) {
            addCriterion("F_OPERATOR >", value, "fOperator");
            return (Criteria) this;
        }

        public Criteria andFOperatorGreaterThanOrEqualTo(String value) {
            addCriterion("F_OPERATOR >=", value, "fOperator");
            return (Criteria) this;
        }

        public Criteria andFOperatorLessThan(String value) {
            addCriterion("F_OPERATOR <", value, "fOperator");
            return (Criteria) this;
        }

        public Criteria andFOperatorLessThanOrEqualTo(String value) {
            addCriterion("F_OPERATOR <=", value, "fOperator");
            return (Criteria) this;
        }

        public Criteria andFOperatorLike(String value) {
            addCriterion("F_OPERATOR like", value, "fOperator");
            return (Criteria) this;
        }

        public Criteria andFOperatorNotLike(String value) {
            addCriterion("F_OPERATOR not like", value, "fOperator");
            return (Criteria) this;
        }

        public Criteria andFOperatorIn(List<String> values) {
            addCriterion("F_OPERATOR in", values, "fOperator");
            return (Criteria) this;
        }

        public Criteria andFOperatorNotIn(List<String> values) {
            addCriterion("F_OPERATOR not in", values, "fOperator");
            return (Criteria) this;
        }

        public Criteria andFOperatorBetween(String value1, String value2) {
            addCriterion("F_OPERATOR between", value1, value2, "fOperator");
            return (Criteria) this;
        }

        public Criteria andFOperatorNotBetween(String value1, String value2) {
            addCriterion("F_OPERATOR not between", value1, value2, "fOperator");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}