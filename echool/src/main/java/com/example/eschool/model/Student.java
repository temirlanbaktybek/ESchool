package com.example.eschool.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Student implements Serializable{
    private int id;
    private String first_name;
    private String last_name;
    private double gpa;
}
