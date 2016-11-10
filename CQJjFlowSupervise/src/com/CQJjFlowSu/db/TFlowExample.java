package com.CQJjFlowSu.db;

import java.util.ArrayList;
import java.util.List;

public class TFlowExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public TFlowExample() {
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

        public Criteria andFBtIsNull() {
            addCriterion("F_BT is null");
            return (Criteria) this;
        }

        public Criteria andFBtIsNotNull() {
            addCriterion("F_BT is not null");
            return (Criteria) this;
        }

        public Criteria andFBtEqualTo(String value) {
            addCriterion("F_BT =", value, "fBt");
            return (Criteria) this;
        }

        public Criteria andFBtNotEqualTo(String value) {
            addCriterion("F_BT <>", value, "fBt");
            return (Criteria) this;
        }

        public Criteria andFBtGreaterThan(String value) {
            addCriterion("F_BT >", value, "fBt");
            return (Criteria) this;
        }

        public Criteria andFBtGreaterThanOrEqualTo(String value) {
            addCriterion("F_BT >=", value, "fBt");
            return (Criteria) this;
        }

        public Criteria andFBtLessThan(String value) {
            addCriterion("F_BT <", value, "fBt");
            return (Criteria) this;
        }

        public Criteria andFBtLessThanOrEqualTo(String value) {
            addCriterion("F_BT <=", value, "fBt");
            return (Criteria) this;
        }

        public Criteria andFBtLike(String value) {
            addCriterion("F_BT like", value, "fBt");
            return (Criteria) this;
        }

        public Criteria andFBtNotLike(String value) {
            addCriterion("F_BT not like", value, "fBt");
            return (Criteria) this;
        }

        public Criteria andFBtIn(List<String> values) {
            addCriterion("F_BT in", values, "fBt");
            return (Criteria) this;
        }

        public Criteria andFBtNotIn(List<String> values) {
            addCriterion("F_BT not in", values, "fBt");
            return (Criteria) this;
        }

        public Criteria andFBtBetween(String value1, String value2) {
            addCriterion("F_BT between", value1, value2, "fBt");
            return (Criteria) this;
        }

        public Criteria andFBtNotBetween(String value1, String value2) {
            addCriterion("F_BT not between", value1, value2, "fBt");
            return (Criteria) this;
        }

        public Criteria andFLengthIsNull() {
            addCriterion("F_LENGTH is null");
            return (Criteria) this;
        }

        public Criteria andFLengthIsNotNull() {
            addCriterion("F_LENGTH is not null");
            return (Criteria) this;
        }

        public Criteria andFLengthEqualTo(Integer value) {
            addCriterion("F_LENGTH =", value, "fLength");
            return (Criteria) this;
        }

        public Criteria andFLengthNotEqualTo(Integer value) {
            addCriterion("F_LENGTH <>", value, "fLength");
            return (Criteria) this;
        }

        public Criteria andFLengthGreaterThan(Integer value) {
            addCriterion("F_LENGTH >", value, "fLength");
            return (Criteria) this;
        }

        public Criteria andFLengthGreaterThanOrEqualTo(Integer value) {
            addCriterion("F_LENGTH >=", value, "fLength");
            return (Criteria) this;
        }

        public Criteria andFLengthLessThan(Integer value) {
            addCriterion("F_LENGTH <", value, "fLength");
            return (Criteria) this;
        }

        public Criteria andFLengthLessThanOrEqualTo(Integer value) {
            addCriterion("F_LENGTH <=", value, "fLength");
            return (Criteria) this;
        }

        public Criteria andFLengthIn(List<Integer> values) {
            addCriterion("F_LENGTH in", values, "fLength");
            return (Criteria) this;
        }

        public Criteria andFLengthNotIn(List<Integer> values) {
            addCriterion("F_LENGTH not in", values, "fLength");
            return (Criteria) this;
        }

        public Criteria andFLengthBetween(Integer value1, Integer value2) {
            addCriterion("F_LENGTH between", value1, value2, "fLength");
            return (Criteria) this;
        }

        public Criteria andFLengthNotBetween(Integer value1, Integer value2) {
            addCriterion("F_LENGTH not between", value1, value2, "fLength");
            return (Criteria) this;
        }

        public Criteria andFSjbxuIsNull() {
            addCriterion("F_SJBXU is null");
            return (Criteria) this;
        }

        public Criteria andFSjbxuIsNotNull() {
            addCriterion("F_SJBXU is not null");
            return (Criteria) this;
        }

        public Criteria andFSjbxuEqualTo(String value) {
            addCriterion("F_SJBXU =", value, "fSjbxu");
            return (Criteria) this;
        }

        public Criteria andFSjbxuNotEqualTo(String value) {
            addCriterion("F_SJBXU <>", value, "fSjbxu");
            return (Criteria) this;
        }

        public Criteria andFSjbxuGreaterThan(String value) {
            addCriterion("F_SJBXU >", value, "fSjbxu");
            return (Criteria) this;
        }

        public Criteria andFSjbxuGreaterThanOrEqualTo(String value) {
            addCriterion("F_SJBXU >=", value, "fSjbxu");
            return (Criteria) this;
        }

        public Criteria andFSjbxuLessThan(String value) {
            addCriterion("F_SJBXU <", value, "fSjbxu");
            return (Criteria) this;
        }

        public Criteria andFSjbxuLessThanOrEqualTo(String value) {
            addCriterion("F_SJBXU <=", value, "fSjbxu");
            return (Criteria) this;
        }

        public Criteria andFSjbxuLike(String value) {
            addCriterion("F_SJBXU like", value, "fSjbxu");
            return (Criteria) this;
        }

        public Criteria andFSjbxuNotLike(String value) {
            addCriterion("F_SJBXU not like", value, "fSjbxu");
            return (Criteria) this;
        }

        public Criteria andFSjbxuIn(List<String> values) {
            addCriterion("F_SJBXU in", values, "fSjbxu");
            return (Criteria) this;
        }

        public Criteria andFSjbxuNotIn(List<String> values) {
            addCriterion("F_SJBXU not in", values, "fSjbxu");
            return (Criteria) this;
        }

        public Criteria andFSjbxuBetween(String value1, String value2) {
            addCriterion("F_SJBXU between", value1, value2, "fSjbxu");
            return (Criteria) this;
        }

        public Criteria andFSjbxuNotBetween(String value1, String value2) {
            addCriterion("F_SJBXU not between", value1, value2, "fSjbxu");
            return (Criteria) this;
        }

        public Criteria andFServerIpIsNull() {
            addCriterion("F_SERVER_IP is null");
            return (Criteria) this;
        }

        public Criteria andFServerIpIsNotNull() {
            addCriterion("F_SERVER_IP is not null");
            return (Criteria) this;
        }

        public Criteria andFServerIpEqualTo(String value) {
            addCriterion("F_SERVER_IP =", value, "fServerIp");
            return (Criteria) this;
        }

        public Criteria andFServerIpNotEqualTo(String value) {
            addCriterion("F_SERVER_IP <>", value, "fServerIp");
            return (Criteria) this;
        }

        public Criteria andFServerIpGreaterThan(String value) {
            addCriterion("F_SERVER_IP >", value, "fServerIp");
            return (Criteria) this;
        }

        public Criteria andFServerIpGreaterThanOrEqualTo(String value) {
            addCriterion("F_SERVER_IP >=", value, "fServerIp");
            return (Criteria) this;
        }

        public Criteria andFServerIpLessThan(String value) {
            addCriterion("F_SERVER_IP <", value, "fServerIp");
            return (Criteria) this;
        }

        public Criteria andFServerIpLessThanOrEqualTo(String value) {
            addCriterion("F_SERVER_IP <=", value, "fServerIp");
            return (Criteria) this;
        }

        public Criteria andFServerIpLike(String value) {
            addCriterion("F_SERVER_IP like", value, "fServerIp");
            return (Criteria) this;
        }

        public Criteria andFServerIpNotLike(String value) {
            addCriterion("F_SERVER_IP not like", value, "fServerIp");
            return (Criteria) this;
        }

        public Criteria andFServerIpIn(List<String> values) {
            addCriterion("F_SERVER_IP in", values, "fServerIp");
            return (Criteria) this;
        }

        public Criteria andFServerIpNotIn(List<String> values) {
            addCriterion("F_SERVER_IP not in", values, "fServerIp");
            return (Criteria) this;
        }

        public Criteria andFServerIpBetween(String value1, String value2) {
            addCriterion("F_SERVER_IP between", value1, value2, "fServerIp");
            return (Criteria) this;
        }

        public Criteria andFServerIpNotBetween(String value1, String value2) {
            addCriterion("F_SERVER_IP not between", value1, value2, "fServerIp");
            return (Criteria) this;
        }

        public Criteria andFLocalhostIsNull() {
            addCriterion("F_LOCALHOST is null");
            return (Criteria) this;
        }

        public Criteria andFLocalhostIsNotNull() {
            addCriterion("F_LOCALHOST is not null");
            return (Criteria) this;
        }

        public Criteria andFLocalhostEqualTo(String value) {
            addCriterion("F_LOCALHOST =", value, "fLocalhost");
            return (Criteria) this;
        }

        public Criteria andFLocalhostNotEqualTo(String value) {
            addCriterion("F_LOCALHOST <>", value, "fLocalhost");
            return (Criteria) this;
        }

        public Criteria andFLocalhostGreaterThan(String value) {
            addCriterion("F_LOCALHOST >", value, "fLocalhost");
            return (Criteria) this;
        }

        public Criteria andFLocalhostGreaterThanOrEqualTo(String value) {
            addCriterion("F_LOCALHOST >=", value, "fLocalhost");
            return (Criteria) this;
        }

        public Criteria andFLocalhostLessThan(String value) {
            addCriterion("F_LOCALHOST <", value, "fLocalhost");
            return (Criteria) this;
        }

        public Criteria andFLocalhostLessThanOrEqualTo(String value) {
            addCriterion("F_LOCALHOST <=", value, "fLocalhost");
            return (Criteria) this;
        }

        public Criteria andFLocalhostLike(String value) {
            addCriterion("F_LOCALHOST like", value, "fLocalhost");
            return (Criteria) this;
        }

        public Criteria andFLocalhostNotLike(String value) {
            addCriterion("F_LOCALHOST not like", value, "fLocalhost");
            return (Criteria) this;
        }

        public Criteria andFLocalhostIn(List<String> values) {
            addCriterion("F_LOCALHOST in", values, "fLocalhost");
            return (Criteria) this;
        }

        public Criteria andFLocalhostNotIn(List<String> values) {
            addCriterion("F_LOCALHOST not in", values, "fLocalhost");
            return (Criteria) this;
        }

        public Criteria andFLocalhostBetween(String value1, String value2) {
            addCriterion("F_LOCALHOST between", value1, value2, "fLocalhost");
            return (Criteria) this;
        }

        public Criteria andFLocalhostNotBetween(String value1, String value2) {
            addCriterion("F_LOCALHOST not between", value1, value2, "fLocalhost");
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

        public Criteria andFVersionIsNull() {
            addCriterion("F_VERSION is null");
            return (Criteria) this;
        }

        public Criteria andFVersionIsNotNull() {
            addCriterion("F_VERSION is not null");
            return (Criteria) this;
        }

        public Criteria andFVersionEqualTo(String value) {
            addCriterion("F_VERSION =", value, "fVersion");
            return (Criteria) this;
        }

        public Criteria andFVersionNotEqualTo(String value) {
            addCriterion("F_VERSION <>", value, "fVersion");
            return (Criteria) this;
        }

        public Criteria andFVersionGreaterThan(String value) {
            addCriterion("F_VERSION >", value, "fVersion");
            return (Criteria) this;
        }

        public Criteria andFVersionGreaterThanOrEqualTo(String value) {
            addCriterion("F_VERSION >=", value, "fVersion");
            return (Criteria) this;
        }

        public Criteria andFVersionLessThan(String value) {
            addCriterion("F_VERSION <", value, "fVersion");
            return (Criteria) this;
        }

        public Criteria andFVersionLessThanOrEqualTo(String value) {
            addCriterion("F_VERSION <=", value, "fVersion");
            return (Criteria) this;
        }

        public Criteria andFVersionLike(String value) {
            addCriterion("F_VERSION like", value, "fVersion");
            return (Criteria) this;
        }

        public Criteria andFVersionNotLike(String value) {
            addCriterion("F_VERSION not like", value, "fVersion");
            return (Criteria) this;
        }

        public Criteria andFVersionIn(List<String> values) {
            addCriterion("F_VERSION in", values, "fVersion");
            return (Criteria) this;
        }

        public Criteria andFVersionNotIn(List<String> values) {
            addCriterion("F_VERSION not in", values, "fVersion");
            return (Criteria) this;
        }

        public Criteria andFVersionBetween(String value1, String value2) {
            addCriterion("F_VERSION between", value1, value2, "fVersion");
            return (Criteria) this;
        }

        public Criteria andFVersionNotBetween(String value1, String value2) {
            addCriterion("F_VERSION not between", value1, value2, "fVersion");
            return (Criteria) this;
        }

        public Criteria andFOrderIsNull() {
            addCriterion("F_ORDER is null");
            return (Criteria) this;
        }

        public Criteria andFOrderIsNotNull() {
            addCriterion("F_ORDER is not null");
            return (Criteria) this;
        }

        public Criteria andFOrderEqualTo(String value) {
            addCriterion("F_ORDER =", value, "fOrder");
            return (Criteria) this;
        }

        public Criteria andFOrderNotEqualTo(String value) {
            addCriterion("F_ORDER <>", value, "fOrder");
            return (Criteria) this;
        }

        public Criteria andFOrderGreaterThan(String value) {
            addCriterion("F_ORDER >", value, "fOrder");
            return (Criteria) this;
        }

        public Criteria andFOrderGreaterThanOrEqualTo(String value) {
            addCriterion("F_ORDER >=", value, "fOrder");
            return (Criteria) this;
        }

        public Criteria andFOrderLessThan(String value) {
            addCriterion("F_ORDER <", value, "fOrder");
            return (Criteria) this;
        }

        public Criteria andFOrderLessThanOrEqualTo(String value) {
            addCriterion("F_ORDER <=", value, "fOrder");
            return (Criteria) this;
        }

        public Criteria andFOrderLike(String value) {
            addCriterion("F_ORDER like", value, "fOrder");
            return (Criteria) this;
        }

        public Criteria andFOrderNotLike(String value) {
            addCriterion("F_ORDER not like", value, "fOrder");
            return (Criteria) this;
        }

        public Criteria andFOrderIn(List<String> values) {
            addCriterion("F_ORDER in", values, "fOrder");
            return (Criteria) this;
        }

        public Criteria andFOrderNotIn(List<String> values) {
            addCriterion("F_ORDER not in", values, "fOrder");
            return (Criteria) this;
        }

        public Criteria andFOrderBetween(String value1, String value2) {
            addCriterion("F_ORDER between", value1, value2, "fOrder");
            return (Criteria) this;
        }

        public Criteria andFOrderNotBetween(String value1, String value2) {
            addCriterion("F_ORDER not between", value1, value2, "fOrder");
            return (Criteria) this;
        }

        public Criteria andFNetDateIsNull() {
            addCriterion("F_NET_DATE is null");
            return (Criteria) this;
        }

        public Criteria andFNetDateIsNotNull() {
            addCriterion("F_NET_DATE is not null");
            return (Criteria) this;
        }

        public Criteria andFNetDateEqualTo(String value) {
            addCriterion("F_NET_DATE =", value, "fNetDate");
            return (Criteria) this;
        }

        public Criteria andFNetDateNotEqualTo(String value) {
            addCriterion("F_NET_DATE <>", value, "fNetDate");
            return (Criteria) this;
        }

        public Criteria andFNetDateGreaterThan(String value) {
            addCriterion("F_NET_DATE >", value, "fNetDate");
            return (Criteria) this;
        }

        public Criteria andFNetDateGreaterThanOrEqualTo(String value) {
            addCriterion("F_NET_DATE >=", value, "fNetDate");
            return (Criteria) this;
        }

        public Criteria andFNetDateLessThan(String value) {
            addCriterion("F_NET_DATE <", value, "fNetDate");
            return (Criteria) this;
        }

        public Criteria andFNetDateLessThanOrEqualTo(String value) {
            addCriterion("F_NET_DATE <=", value, "fNetDate");
            return (Criteria) this;
        }

        public Criteria andFNetDateLike(String value) {
            addCriterion("F_NET_DATE like", value, "fNetDate");
            return (Criteria) this;
        }

        public Criteria andFNetDateNotLike(String value) {
            addCriterion("F_NET_DATE not like", value, "fNetDate");
            return (Criteria) this;
        }

        public Criteria andFNetDateIn(List<String> values) {
            addCriterion("F_NET_DATE in", values, "fNetDate");
            return (Criteria) this;
        }

        public Criteria andFNetDateNotIn(List<String> values) {
            addCriterion("F_NET_DATE not in", values, "fNetDate");
            return (Criteria) this;
        }

        public Criteria andFNetDateBetween(String value1, String value2) {
            addCriterion("F_NET_DATE between", value1, value2, "fNetDate");
            return (Criteria) this;
        }

        public Criteria andFNetDateNotBetween(String value1, String value2) {
            addCriterion("F_NET_DATE not between", value1, value2, "fNetDate");
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

        public Criteria andFEletriIsNull() {
            addCriterion("F_ELETRI is null");
            return (Criteria) this;
        }

        public Criteria andFEletriIsNotNull() {
            addCriterion("F_ELETRI is not null");
            return (Criteria) this;
        }

        public Criteria andFEletriEqualTo(String value) {
            addCriterion("F_ELETRI =", value, "fEletri");
            return (Criteria) this;
        }

        public Criteria andFEletriNotEqualTo(String value) {
            addCriterion("F_ELETRI <>", value, "fEletri");
            return (Criteria) this;
        }

        public Criteria andFEletriGreaterThan(String value) {
            addCriterion("F_ELETRI >", value, "fEletri");
            return (Criteria) this;
        }

        public Criteria andFEletriGreaterThanOrEqualTo(String value) {
            addCriterion("F_ELETRI >=", value, "fEletri");
            return (Criteria) this;
        }

        public Criteria andFEletriLessThan(String value) {
            addCriterion("F_ELETRI <", value, "fEletri");
            return (Criteria) this;
        }

        public Criteria andFEletriLessThanOrEqualTo(String value) {
            addCriterion("F_ELETRI <=", value, "fEletri");
            return (Criteria) this;
        }

        public Criteria andFEletriLike(String value) {
            addCriterion("F_ELETRI like", value, "fEletri");
            return (Criteria) this;
        }

        public Criteria andFEletriNotLike(String value) {
            addCriterion("F_ELETRI not like", value, "fEletri");
            return (Criteria) this;
        }

        public Criteria andFEletriIn(List<String> values) {
            addCriterion("F_ELETRI in", values, "fEletri");
            return (Criteria) this;
        }

        public Criteria andFEletriNotIn(List<String> values) {
            addCriterion("F_ELETRI not in", values, "fEletri");
            return (Criteria) this;
        }

        public Criteria andFEletriBetween(String value1, String value2) {
            addCriterion("F_ELETRI between", value1, value2, "fEletri");
            return (Criteria) this;
        }

        public Criteria andFEletriNotBetween(String value1, String value2) {
            addCriterion("F_ELETRI not between", value1, value2, "fEletri");
            return (Criteria) this;
        }

        public Criteria andFGprsLacIsNull() {
            addCriterion("F_GPRS_LAC is null");
            return (Criteria) this;
        }

        public Criteria andFGprsLacIsNotNull() {
            addCriterion("F_GPRS_LAC is not null");
            return (Criteria) this;
        }

        public Criteria andFGprsLacEqualTo(String value) {
            addCriterion("F_GPRS_LAC =", value, "fGprsLac");
            return (Criteria) this;
        }

        public Criteria andFGprsLacNotEqualTo(String value) {
            addCriterion("F_GPRS_LAC <>", value, "fGprsLac");
            return (Criteria) this;
        }

        public Criteria andFGprsLacGreaterThan(String value) {
            addCriterion("F_GPRS_LAC >", value, "fGprsLac");
            return (Criteria) this;
        }

        public Criteria andFGprsLacGreaterThanOrEqualTo(String value) {
            addCriterion("F_GPRS_LAC >=", value, "fGprsLac");
            return (Criteria) this;
        }

        public Criteria andFGprsLacLessThan(String value) {
            addCriterion("F_GPRS_LAC <", value, "fGprsLac");
            return (Criteria) this;
        }

        public Criteria andFGprsLacLessThanOrEqualTo(String value) {
            addCriterion("F_GPRS_LAC <=", value, "fGprsLac");
            return (Criteria) this;
        }

        public Criteria andFGprsLacLike(String value) {
            addCriterion("F_GPRS_LAC like", value, "fGprsLac");
            return (Criteria) this;
        }

        public Criteria andFGprsLacNotLike(String value) {
            addCriterion("F_GPRS_LAC not like", value, "fGprsLac");
            return (Criteria) this;
        }

        public Criteria andFGprsLacIn(List<String> values) {
            addCriterion("F_GPRS_LAC in", values, "fGprsLac");
            return (Criteria) this;
        }

        public Criteria andFGprsLacNotIn(List<String> values) {
            addCriterion("F_GPRS_LAC not in", values, "fGprsLac");
            return (Criteria) this;
        }

        public Criteria andFGprsLacBetween(String value1, String value2) {
            addCriterion("F_GPRS_LAC between", value1, value2, "fGprsLac");
            return (Criteria) this;
        }

        public Criteria andFGprsLacNotBetween(String value1, String value2) {
            addCriterion("F_GPRS_LAC not between", value1, value2, "fGprsLac");
            return (Criteria) this;
        }

        public Criteria andFDataNumIsNull() {
            addCriterion("F_DATA_NUM is null");
            return (Criteria) this;
        }

        public Criteria andFDataNumIsNotNull() {
            addCriterion("F_DATA_NUM is not null");
            return (Criteria) this;
        }

        public Criteria andFDataNumEqualTo(Integer value) {
            addCriterion("F_DATA_NUM =", value, "fDataNum");
            return (Criteria) this;
        }

        public Criteria andFDataNumNotEqualTo(Integer value) {
            addCriterion("F_DATA_NUM <>", value, "fDataNum");
            return (Criteria) this;
        }

        public Criteria andFDataNumGreaterThan(Integer value) {
            addCriterion("F_DATA_NUM >", value, "fDataNum");
            return (Criteria) this;
        }

        public Criteria andFDataNumGreaterThanOrEqualTo(Integer value) {
            addCriterion("F_DATA_NUM >=", value, "fDataNum");
            return (Criteria) this;
        }

        public Criteria andFDataNumLessThan(Integer value) {
            addCriterion("F_DATA_NUM <", value, "fDataNum");
            return (Criteria) this;
        }

        public Criteria andFDataNumLessThanOrEqualTo(Integer value) {
            addCriterion("F_DATA_NUM <=", value, "fDataNum");
            return (Criteria) this;
        }

        public Criteria andFDataNumIn(List<Integer> values) {
            addCriterion("F_DATA_NUM in", values, "fDataNum");
            return (Criteria) this;
        }

        public Criteria andFDataNumNotIn(List<Integer> values) {
            addCriterion("F_DATA_NUM not in", values, "fDataNum");
            return (Criteria) this;
        }

        public Criteria andFDataNumBetween(Integer value1, Integer value2) {
            addCriterion("F_DATA_NUM between", value1, value2, "fDataNum");
            return (Criteria) this;
        }

        public Criteria andFDataNumNotBetween(Integer value1, Integer value2) {
            addCriterion("F_DATA_NUM not between", value1, value2, "fDataNum");
            return (Criteria) this;
        }

        public Criteria andFCrcIsNull() {
            addCriterion("F_CRC is null");
            return (Criteria) this;
        }

        public Criteria andFCrcIsNotNull() {
            addCriterion("F_CRC is not null");
            return (Criteria) this;
        }

        public Criteria andFCrcEqualTo(String value) {
            addCriterion("F_CRC =", value, "fCrc");
            return (Criteria) this;
        }

        public Criteria andFCrcNotEqualTo(String value) {
            addCriterion("F_CRC <>", value, "fCrc");
            return (Criteria) this;
        }

        public Criteria andFCrcGreaterThan(String value) {
            addCriterion("F_CRC >", value, "fCrc");
            return (Criteria) this;
        }

        public Criteria andFCrcGreaterThanOrEqualTo(String value) {
            addCriterion("F_CRC >=", value, "fCrc");
            return (Criteria) this;
        }

        public Criteria andFCrcLessThan(String value) {
            addCriterion("F_CRC <", value, "fCrc");
            return (Criteria) this;
        }

        public Criteria andFCrcLessThanOrEqualTo(String value) {
            addCriterion("F_CRC <=", value, "fCrc");
            return (Criteria) this;
        }

        public Criteria andFCrcLike(String value) {
            addCriterion("F_CRC like", value, "fCrc");
            return (Criteria) this;
        }

        public Criteria andFCrcNotLike(String value) {
            addCriterion("F_CRC not like", value, "fCrc");
            return (Criteria) this;
        }

        public Criteria andFCrcIn(List<String> values) {
            addCriterion("F_CRC in", values, "fCrc");
            return (Criteria) this;
        }

        public Criteria andFCrcNotIn(List<String> values) {
            addCriterion("F_CRC not in", values, "fCrc");
            return (Criteria) this;
        }

        public Criteria andFCrcBetween(String value1, String value2) {
            addCriterion("F_CRC between", value1, value2, "fCrc");
            return (Criteria) this;
        }

        public Criteria andFCrcNotBetween(String value1, String value2) {
            addCriterion("F_CRC not between", value1, value2, "fCrc");
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