package com.example.eschool.restAPI;

import com.example.eschool.model.Student;
import com.example.eschool.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.PermitAll;
import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "*")
public class StudentRestAPI {
    @Autowired
    private StudentService service;

    @GetMapping
    String startServer(){
        return "auth";
    }

    @GetMapping
    @RequestMapping("/all")
    List<Student> findAll(){
        return service.getStudents();
    }

    @PostMapping
    @PermitAll
    @RequestMapping("/add")
    Student insert(@RequestBody Student student){
        System.out.println(student);
        return service.insertStudent(student);
    }

    @DeleteMapping
    @RequestMapping("/delete/{id}")
    String delete(@PathVariable Integer id){
        System.out.println(id);
        return service.deleteStudent(id);
    }

    @PutMapping
    @RequestMapping("/update")
    Student update(@RequestBody Student student){
        return service.updateStudent(student);
    }
}
