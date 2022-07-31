package com.example.eschool.service;

import com.example.eschool.mapper.StudentMapper;
import com.example.eschool.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentMapper studentMapper;

    public List<Student> getStudents(){
        return studentMapper.findAll();
    }

    public Student insertStudent(Student student){
        boolean isInserted = false;
        String result ="";
        try {
            studentMapper.insert(student);
            isInserted = true;
        }catch (Exception e){
            e.printStackTrace();
        }
        if( isInserted == true ){
            result = "Inserted new Student: " + student.toString();
        }else{
            result = "Insertion failed ";
        }
        return student;
    }

    public String deleteStudent(int id){
        boolean isDeleted = false;
        String result ="";
        try {
            studentMapper.delete(id);
            isDeleted = true;
        }catch (Exception e){
            e.printStackTrace();
        }
        if( isDeleted == true ){
            result = "Deleted Student: " +  id;
        }else{
            result = "Deletion failed ";
        }
        return result;
    }

    public Student updateStudent(Student student){
        studentMapper.update(student);
        return student;
    }
}
