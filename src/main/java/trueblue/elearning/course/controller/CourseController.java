package trueblue.elearning.course.controller;

import java.io.IOException;


import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import groovyjarjarpicocli.CommandLine.Model;
import trueblue.elearning.course.dto.CourseDto;
import trueblue.elearning.course.service.CourseService;
import trueblue.elearning.user.service.CustormerUserDetailsService;


@Controller
@RequestMapping("/course")
public class CourseController {
	@Autowired private CourseService courseService;
	@Autowired private CustormerUserDetailsService cus;
	@RequestMapping("")
	public String index(CourseDto courseDto) {
		return "course/course";
	}
	@RequestMapping(value = "/createCourse", method = RequestMethod.POST)
	public void createCourse(@ModelAttribute("courseDto") CourseDto courseDto ,HttpServletResponse response) throws IOException {
		System.out.println(courseDto.isStatus());
		
		
		
		if(cus.getUsername()!=null) {
			courseDto.setCreateBy(cus.getUsername());
			courseService.addCoures(courseDto);
			
			response.sendRedirect("/course?fail=fail");
		}else {
			response.sendRedirect("/login");
		}
		
		
		
		
	
	
	}
	
	@RequestMapping(value = "/showCourse")
	public String indexShowCourse(Model model, CourseDto courseDto) {

		return "course/showCourse";
	}
	
	
	

}
