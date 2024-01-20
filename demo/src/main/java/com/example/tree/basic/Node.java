package com.example.tree.basic;

import java.util.List;

public abstract class Node {
    public abstract List<? extends Node> getChildren();

    @Override
    public abstract int hashCode();

    @Override
    public abstract boolean equals(Object obj);

    @Override
    public abstract String toString();
}
