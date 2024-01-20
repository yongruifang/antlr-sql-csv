package com.example.tree.detail;

import java.util.List;
import java.util.Objects;

import com.example.tree.basic.Expression;
import com.example.tree.basic.Node;
import com.google.common.collect.ImmutableList;

public class Identifier extends Expression {

    private final String value;

    private final boolean quoted; // 是否有引号包裹

    public Identifier(String value, boolean quoted) {
        this.value = value;
        this.quoted = quoted;
    }

    /**
     * 获取值
     * 
     * @return value
     */
    public String getValue() {
        return value;
    }

    /**
     * 判断是否有引号包裹
     */
    public boolean isQuoted() {
        return quoted;
    }

    @Override
    public List<Node> getChildren() {
        return ImmutableList.of();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        Identifier that = (Identifier) o;
        return Objects.equals(value, that.value);
    }

    @Override
    public int hashCode() {
        return value.hashCode();
    }

    @Override
    public final String toString() {
        return value;
    }

}
