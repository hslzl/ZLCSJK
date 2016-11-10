package com.CQJjFlowSu.db;

import java.util.ArrayList;
import java.util.List;

public class TFlowDataExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public TFlowDataExample() {
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

        public Criteria andFFlowIdIsNull() {
            addCriterion("F_FLOW_ID is null");
            return (Criteria) this;
        }

        public Criteria andFFlowIdIsNotNull() {
            addCriterion("F_FLOW_ID is not null");
            return (Criteria) this;
        }

        public Criteria andFFlowIdEqualTo(String value) {
            addCriterion("F_FLOW_ID =", value, "fFlowId");
            return (Criteria) this;
        }

        public Criteria andFFlowIdNotEqualTo(String value) {
            addCriterion("F_FLOW_ID <>", value, "fFlowId");
            return (Criteria) this;
        }

        public Criteria andFFlowIdGreaterThan(String value) {
            addCriterion("F_FLOW_ID >", value, "fFlowId");
            return (Criteria) this;
        }

        public Criteria andFFlowIdGreaterThanOrEqualTo(String value) {
            addCriterion("F_FLOW_ID >=", value, "fFlowId");
            return (Criteria) this;
        }

        public Criteria andFFlowIdLessThan(String value) {
            addCriterion("F_FLOW_ID <", value, "fFlowId");
            return (Criteria) this;
        }

        public Criteria andFFlowIdLessThanOrEqualTo(String value) {
            addCriterion("F_FLOW_ID <=", value, "fFlowId");
            return (Criteria) this;
        }

        public Criteria andFFlowIdLike(String value) {
            addCriterion("F_FLOW_ID like", value, "fFlowId");
            return (Criteria) this;
        }

        public Criteria andFFlowIdNotLike(String value) {
            addCriterion("F_FLOW_ID not like", value, "fFlowId");
            return (Criteria) this;
        }

        public Criteria andFFlowIdIn(List<String> values) {
            addCriterion("F_FLOW_ID in", values, "fFlowId");
            return (Criteria) this;
        }

        public Criteria andFFlowIdNotIn(List<String> values) {
            addCriterion("F_FLOW_ID not in", values, "fFlowId");
            return (Criteria) this;
        }

        public Criteria andFFlowIdBetween(String value1, String value2) {
            addCriterion("F_FLOW_ID between", value1, value2, "fFlowId");
            return (Criteria) this;
        }

        public Criteria andFFlowIdNotBetween(String value1, String value2) {
            addCriterion("F_FLOW_ID not between", value1, value2, "fFlowId");
            return (Criteria) this;
        }

        public Criteria andFIpIsNull() {
            addCriterion("F_IP is null");
            return (Criteria) this;
        }

        public Criteria andFIpIsNotNull() {
            addCriterion("F_IP is not null");
            return (Criteria) this;
        }

        public Criteria andFIpEqualTo(String value) {
            addCriterion("F_IP =", value, "fIp");
            return (Criteria) this;
        }

        public Criteria andFIpNotEqualTo(String value) {
            addCriterion("F_IP <>", value, "fIp");
            return (Criteria) this;
        }

        public Criteria andFIpGreaterThan(String value) {
            addCriterion("F_IP >", value, "fIp");
            return (Criteria) this;
        }

        public Criteria andFIpGreaterThanOrEqualTo(String value) {
            addCriterion("F_IP >=", value, "fIp");
            return (Criteria) this;
        }

        public Criteria andFIpLessThan(String value) {
            addCriterion("F_IP <", value, "fIp");
            return (Criteria) this;
        }

        public Criteria andFIpLessThanOrEqualTo(String value) {
            addCriterion("F_IP <=", value, "fIp");
            return (Criteria) this;
        }

        public Criteria andFIpLike(String value) {
            addCriterion("F_IP like", value, "fIp");
            return (Criteria) this;
        }

        public Criteria andFIpNotLike(String value) {
            addCriterion("F_IP not like", value, "fIp");
            return (Criteria) this;
        }

        public Criteria andFIpIn(List<String> values) {
            addCriterion("F_IP in", values, "fIp");
            return (Criteria) this;
        }

        public Criteria andFIpNotIn(List<String> values) {
            addCriterion("F_IP not in", values, "fIp");
            return (Criteria) this;
        }

        public Criteria andFIpBetween(String value1, String value2) {
            addCriterion("F_IP between", value1, value2, "fIp");
            return (Criteria) this;
        }

        public Criteria andFIpNotBetween(String value1, String value2) {
            addCriterion("F_IP not between", value1, value2, "fIp");
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

        public Criteria andFReceiveDateIsNull() {
            addCriterion("F_RECEIVE_DATE is null");
            return (Criteria) this;
        }

        public Criteria andFReceiveDateIsNotNull() {
            addCriterion("F_RECEIVE_DATE is not null");
            return (Criteria) this;
        }

        public Criteria andFReceiveDateEqualTo(String value) {
            addCriterion("F_RECEIVE_DATE =", value, "fReceiveDate");
            return (Criteria) this;
        }

        public Criteria andFReceiveDateNotEqualTo(String value) {
            addCriterion("F_RECEIVE_DATE <>", value, "fReceiveDate");
            return (Criteria) this;
        }

        public Criteria andFReceiveDateGreaterThan(String value) {
            addCriterion("F_RECEIVE_DATE >", value, "fReceiveDate");
            return (Criteria) this;
        }

        public Criteria andFReceiveDateGreaterThanOrEqualTo(String value) {
            addCriterion("F_RECEIVE_DATE >=", value, "fReceiveDate");
            return (Criteria) this;
        }

        public Criteria andFReceiveDateLessThan(String value) {
            addCriterion("F_RECEIVE_DATE <", value, "fReceiveDate");
            return (Criteria) this;
        }

        public Criteria andFReceiveDateLessThanOrEqualTo(String value) {
            addCriterion("F_RECEIVE_DATE <=", value, "fReceiveDate");
            return (Criteria) this;
        }

        public Criteria andFReceiveDateLike(String value) {
            addCriterion("F_RECEIVE_DATE like", value, "fReceiveDate");
            return (Criteria) this;
        }

        public Criteria andFReceiveDateNotLike(String value) {
            addCriterion("F_RECEIVE_DATE not like", value, "fReceiveDate");
            return (Criteria) this;
        }

        public Criteria andFReceiveDateIn(List<String> values) {
            addCriterion("F_RECEIVE_DATE in", values, "fReceiveDate");
            return (Criteria) this;
        }

        public Criteria andFReceiveDateNotIn(List<String> values) {
            addCriterion("F_RECEIVE_DATE not in", values, "fReceiveDate");
            return (Criteria) this;
        }

        public Criteria andFReceiveDateBetween(String value1, String value2) {
            addCriterion("F_RECEIVE_DATE between", value1, value2, "fReceiveDate");
            return (Criteria) this;
        }

        public Criteria andFReceiveDateNotBetween(String value1, String value2) {
            addCriterion("F_RECEIVE_DATE not between", value1, value2, "fReceiveDate");
            return (Criteria) this;
        }

        public Criteria andFDataIsNull() {
            addCriterion("F_DATA is null");
            return (Criteria) this;
        }

        public Criteria andFDataIsNotNull() {
            addCriterion("F_DATA is not null");
            return (Criteria) this;
        }

        public Criteria andFDataEqualTo(String value) {
            addCriterion("F_DATA =", value, "fData");
            return (Criteria) this;
        }

        public Criteria andFDataNotEqualTo(String value) {
            addCriterion("F_DATA <>", value, "fData");
            return (Criteria) this;
        }

        public Criteria andFDataGreaterThan(String value) {
            addCriterion("F_DATA >", value, "fData");
            return (Criteria) this;
        }

        public Criteria andFDataGreaterThanOrEqualTo(String value) {
            addCriterion("F_DATA >=", value, "fData");
            return (Criteria) this;
        }

        public Criteria andFDataLessThan(String value) {
            addCriterion("F_DATA <", value, "fData");
            return (Criteria) this;
        }

        public Criteria andFDataLessThanOrEqualTo(String value) {
            addCriterion("F_DATA <=", value, "fData");
            return (Criteria) this;
        }

        public Criteria andFDataLike(String value) {
            addCriterion("F_DATA like", value, "fData");
            return (Criteria) this;
        }

        public Criteria andFDataNotLike(String value) {
            addCriterion("F_DATA not like", value, "fData");
            return (Criteria) this;
        }

        public Criteria andFDataIn(List<String> values) {
            addCriterion("F_DATA in", values, "fData");
            return (Criteria) this;
        }

        public Criteria andFDataNotIn(List<String> values) {
            addCriterion("F_DATA not in", values, "fData");
            return (Criteria) this;
        }

        public Criteria andFDataBetween(String value1, String value2) {
            addCriterion("F_DATA between", value1, value2, "fData");
            return (Criteria) this;
        }

        public Criteria andFDataNotBetween(String value1, String value2) {
            addCriterion("F_DATA not between", value1, value2, "fData");
            return (Criteria) this;
        }

        public Criteria andFElectriIsNull() {
            addCriterion("F_ELECTRI is null");
            return (Criteria) this;
        }

        public Criteria andFElectriIsNotNull() {
            addCriterion("F_ELECTRI is not null");
            return (Criteria) this;
        }

        public Criteria andFElectriEqualTo(String value) {
            addCriterion("F_ELECTRI =", value, "fElectri");
            return (Criteria) this;
        }

        public Criteria andFElectriNotEqualTo(String value) {
            addCriterion("F_ELECTRI <>", value, "fElectri");
            return (Criteria) this;
        }

        public Criteria andFElectriGreaterThan(String value) {
            addCriterion("F_ELECTRI >", value, "fElectri");
            return (Criteria) this;
        }

        public Criteria andFElectriGreaterThanOrEqualTo(String value) {
            addCriterion("F_ELECTRI >=", value, "fElectri");
            return (Criteria) this;
        }

        public Criteria andFElectriLessThan(String value) {
            addCriterion("F_ELECTRI <", value, "fElectri");
            return (Criteria) this;
        }

        public Criteria andFElectriLessThanOrEqualTo(String value) {
            addCriterion("F_ELECTRI <=", value, "fElectri");
            return (Criteria) this;
        }

        public Criteria andFElectriLike(String value) {
            addCriterion("F_ELECTRI like", value, "fElectri");
            return (Criteria) this;
        }

        public Criteria andFElectriNotLike(String value) {
            addCriterion("F_ELECTRI not like", value, "fElectri");
            return (Criteria) this;
        }

        public Criteria andFElectriIn(List<String> values) {
            addCriterion("F_ELECTRI in", values, "fElectri");
            return (Criteria) this;
        }

        public Criteria andFElectriNotIn(List<String> values) {
            addCriterion("F_ELECTRI not in", values, "fElectri");
            return (Criteria) this;
        }

        public Criteria andFElectriBetween(String value1, String value2) {
            addCriterion("F_ELECTRI between", value1, value2, "fElectri");
            return (Criteria) this;
        }

        public Criteria andFElectriNotBetween(String value1, String value2) {
            addCriterion("F_ELECTRI not between", value1, value2, "fElectri");
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