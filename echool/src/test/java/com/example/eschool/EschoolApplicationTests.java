package com.example.eschool;

import com.example.eschool.service.StudentService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import org.testng.Assert;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;

@SpringBootTest
class EschoolApplicationTests {

    @Autowired
    private WebApplicationContext webApplicationContext;

    private MockMvc mockMvc;

    @Autowired
    private StudentService studentService;

    @BeforeClass
    public void setup() {
        System.out.println("BeforeClass");
        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
    }

    @BeforeMethod
    public void checkServer() throws Exception {
        System.out.println("checkServer is OK");
    }

    @Test
    public void checkStudentService(){
        Assert.assertNotNull(studentService.getStudents());
    }

}
