package com.example.tree.detail;

import java.util.List;
import java.util.Objects;

import com.example.tree.basic.Node;
import com.google.common.collect.ImmutableList;

public class QuerySpecification extends Node {
    private final List<Identifier> selectItems;
    private final List<Identifier> relations;

    public QuerySpecification(List<Identifier> selectItems, List<Identifier> relations) {
        this.selectItems = selectItems;
        this.relations = relations;
    }

    public List<Identifier> getSelectItems() {
        return selectItems;
    }

    public List<Identifier> getRelations() {
        return relations;
    }

    @Override
    public List<Node> getChildren() {
        ImmutableList.Builder<Node> builder = ImmutableList.builder(); // 用于构建不可变的List
        builder.addAll(selectItems);
        builder.addAll(relations);
        return builder.build(); // 构建不可变的List
    }

    @Override
    public String toString() {
        return "QuerySpecification(selectItems=" + selectItems + ", relations=" + relations + ")";
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof QuerySpecification)) {
            return false;
        }
        QuerySpecification querySpecification = (QuerySpecification) o;
        return Objects.equals(selectItems, querySpecification.selectItems)
                && Objects.equals(relations, querySpecification.relations);
    }

    @Override
    public int hashCode() {
        return Objects.hash(selectItems, relations);
    }
}
