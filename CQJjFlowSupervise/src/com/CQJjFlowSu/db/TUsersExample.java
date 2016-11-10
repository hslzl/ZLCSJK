package com.CQJjFlowSu.db;

import java.util.ArrayList;
import java.util.List;

public class TUsersExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public TUsersExample() {
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

        public Criteria andFUserIdIsNull() {
            addCriterion("F_USER_ID is null");
            return (Criteria) this;
        }

        public Criteria andFUserIdIsNotNull() {
            addCriterion("F_USER_ID is not null");
            return (Criteria) this;
        }

        public Criteria andFUserIdEqualTo(String value) {
            addCriterion("F_USER_ID =", value, "fUserId");
            return (Criteria) this;
        }

        public Criteria andFUserIdNotEqualTo(String value) {
            addCriterion("F_USER_ID <>", value, "fUserId");
            return (Criteria) this;
        }

        public Criteria andFUserIdGreaterThan(String value) {
            addCriterion("F_USER_ID >", value, "fUserId");
            return (Criteria) this;
        }

        public Criteria andFUserIdGreaterThanOrEqualTo(String value) {
            addCriterion("F_USER_ID >=", value, "fUserId");
            return (Criteria) this;
        }

        public Criteria andFUserIdLessThan(String value) {
            addCriterion("F_USER_ID <", value, "fUserId");
            return (Criteria) this;
        }

        public Criteria andFUserIdLessThanOrEqualTo(String value) {
            addCriterion("F_USER_ID <=", value, "fUserId");
            return (Criteria) this;
        }

        public Criteria andFUserIdLike(String value) {
            addCriterion("F_USER_ID like", value, "fUserId");
            return (Criteria) this;
        }

        public Criteria andFUserIdNotLike(String value) {
            addCriterion("F_USER_ID not like", value, "fUserId");
            return (Criteria) this;
        }

        public Criteria andFUserIdIn(List<String> values) {
            addCriterion("F_USER_ID in", values, "fUserId");
            return (Criteria) this;
        }

        public Criteria andFUserIdNotIn(List<String> values) {
            addCriterion("F_USER_ID not in", values, "fUserId");
            return (Criteria) this;
        }

        public Criteria andFUserIdBetween(String value1, String value2) {
            addCriterion("F_USER_ID between", value1, value2, "fUserId");
            return (Criteria) this;
        }

        public Criteria andFUserIdNotBetween(String value1, String value2) {
            addCriterion("F_USER_ID not between", value1, value2, "fUserId");
            return (Criteria) this;
        }

        public Criteria andFUserNameIsNull() {
            addCriterion("F_USER_NAME is null");
            return (Criteria) this;
        }

        public Criteria andFUserNameIsNotNull() {
            addCriterion("F_USER_NAME is not null");
            return (Criteria) this;
        }

        public Criteria andFUserNameEqualTo(String value) {
            addCriterion("F_USER_NAME =", value, "fUserName");
            return (Criteria) this;
        }

        public Criteria andFUserNameNotEqualTo(String value) {
            addCriterion("F_USER_NAME <>", value, "fUserName");
            return (Criteria) this;
        }

        public Criteria andFUserNameGreaterThan(String value) {
            addCriterion("F_USER_NAME >", value, "fUserName");
            return (Criteria) this;
        }

        public Criteria andFUserNameGreaterThanOrEqualTo(String value) {
            addCriterion("F_USER_NAME >=", value, "fUserName");
            return (Criteria) this;
        }

        public Criteria andFUserNameLessThan(String value) {
            addCriterion("F_USER_NAME <", value, "fUserName");
            return (Criteria) this;
        }

        public Criteria andFUserNameLessThanOrEqualTo(String value) {
            addCriterion("F_USER_NAME <=", value, "fUserName");
            return (Criteria) this;
        }

        public Criteria andFUserNameLike(String value) {
            addCriterion("F_USER_NAME like", value, "fUserName");
            return (Criteria) this;
        }

        public Criteria andFUserNameNotLike(String value) {
            addCriterion("F_USER_NAME not like", value, "fUserName");
            return (Criteria) this;
        }

        public Criteria andFUserNameIn(List<String> values) {
            addCriterion("F_USER_NAME in", values, "fUserName");
            return (Criteria) this;
        }

        public Criteria andFUserNameNotIn(List<String> values) {
            addCriterion("F_USER_NAME not in", values, "fUserName");
            return (Criteria) this;
        }

        public Criteria andFUserNameBetween(String value1, String value2) {
            addCriterion("F_USER_NAME between", value1, value2, "fUserName");
            return (Criteria) this;
        }

        public Criteria andFUserNameNotBetween(String value1, String value2) {
            addCriterion("F_USER_NAME not between", value1, value2, "fUserName");
            return (Criteria) this;
        }

        public Criteria andFPasswordIsNull() {
            addCriterion("F_PASSWORD is null");
            return (Criteria) this;
        }

        public Criteria andFPasswordIsNotNull() {
            addCriterion("F_PASSWORD is not null");
            return (Criteria) this;
        }

        public Criteria andFPasswordEqualTo(String value) {
            addCriterion("F_PASSWORD =", value, "fPassword");
            return (Criteria) this;
        }

        public Criteria andFPasswordNotEqualTo(String value) {
            addCriterion("F_PASSWORD <>", value, "fPassword");
            return (Criteria) this;
        }

        public Criteria andFPasswordGreaterThan(String value) {
            addCriterion("F_PASSWORD >", value, "fPassword");
            return (Criteria) this;
        }

        public Criteria andFPasswordGreaterThanOrEqualTo(String value) {
            addCriterion("F_PASSWORD >=", value, "fPassword");
            return (Criteria) this;
        }

        public Criteria andFPasswordLessThan(String value) {
            addCriterion("F_PASSWORD <", value, "fPassword");
            return (Criteria) this;
        }

        public Criteria andFPasswordLessThanOrEqualTo(String value) {
            addCriterion("F_PASSWORD <=", value, "fPassword");
            return (Criteria) this;
        }

        public Criteria andFPasswordLike(String value) {
            addCriterion("F_PASSWORD like", value, "fPassword");
            return (Criteria) this;
        }

        public Criteria andFPasswordNotLike(String value) {
            addCriterion("F_PASSWORD not like", value, "fPassword");
            return (Criteria) this;
        }

        public Criteria andFPasswordIn(List<String> values) {
            addCriterion("F_PASSWORD in", values, "fPassword");
            return (Criteria) this;
        }

        public Criteria andFPasswordNotIn(List<String> values) {
            addCriterion("F_PASSWORD not in", values, "fPassword");
            return (Criteria) this;
        }

        public Criteria andFPasswordBetween(String value1, String value2) {
            addCriterion("F_PASSWORD between", value1, value2, "fPassword");
            return (Criteria) this;
        }

        public Criteria andFPasswordNotBetween(String value1, String value2) {
            addCriterion("F_PASSWORD not between", value1, value2, "fPassword");
            return (Criteria) this;
        }

        public Criteria andFDutyIsNull() {
            addCriterion("F_DUTY is null");
            return (Criteria) this;
        }

        public Criteria andFDutyIsNotNull() {
            addCriterion("F_DUTY is not null");
            return (Criteria) this;
        }

        public Criteria andFDutyEqualTo(String value) {
            addCriterion("F_DUTY =", value, "fDuty");
            return (Criteria) this;
        }

        public Criteria andFDutyNotEqualTo(String value) {
            addCriterion("F_DUTY <>", value, "fDuty");
            return (Criteria) this;
        }

        public Criteria andFDutyGreaterThan(String value) {
            addCriterion("F_DUTY >", value, "fDuty");
            return (Criteria) this;
        }

        public Criteria andFDutyGreaterThanOrEqualTo(String value) {
            addCriterion("F_DUTY >=", value, "fDuty");
            return (Criteria) this;
        }

        public Criteria andFDutyLessThan(String value) {
            addCriterion("F_DUTY <", value, "fDuty");
            return (Criteria) this;
        }

        public Criteria andFDutyLessThanOrEqualTo(String value) {
            addCriterion("F_DUTY <=", value, "fDuty");
            return (Criteria) this;
        }

        public Criteria andFDutyLike(String value) {
            addCriterion("F_DUTY like", value, "fDuty");
            return (Criteria) this;
        }

        public Criteria andFDutyNotLike(String value) {
            addCriterion("F_DUTY not like", value, "fDuty");
            return (Criteria) this;
        }

        public Criteria andFDutyIn(List<String> values) {
            addCriterion("F_DUTY in", values, "fDuty");
            return (Criteria) this;
        }

        public Criteria andFDutyNotIn(List<String> values) {
            addCriterion("F_DUTY not in", values, "fDuty");
            return (Criteria) this;
        }

        public Criteria andFDutyBetween(String value1, String value2) {
            addCriterion("F_DUTY between", value1, value2, "fDuty");
            return (Criteria) this;
        }

        public Criteria andFDutyNotBetween(String value1, String value2) {
            addCriterion("F_DUTY not between", value1, value2, "fDuty");
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