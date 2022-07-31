package com.example.eschool.mapper;

import com.example.eschool.model.Student;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface StudentMapper {

    @Select("SELECT * FROM students")
    List<Student> findAll();

    @Insert("INSERT INTO students(first_name, last_name, gpa) VALUES (  #{first_name}, #{last_name}, #{gpa})")
    void insert(Student student);

    @Delete("DELETE FROM students where id = #{id}")
    void delete(int id);

    @Update("UPDATE students SET first_name = #{first_name}, last_name = #{last_name}, gpa = #{gpa} WHERE id = #{id}")
    void update(Student student);

}
