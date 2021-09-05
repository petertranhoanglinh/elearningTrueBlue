package trueblue.elearning.course.controller;

import java.io.IOException;
import java.util.List;

import trueblue.elearning.course.model.CourseModel;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import groovyjarjarpicocli.CommandLine.Model;
import trueblue.elearning.course.dto.CourseDto;
import trueblue.elearning.course.service.CourseService;
import trueblue.elearning.user.service.CustormerUserDetailsService;

@Controller
@RequestMapping("/course")
public class CourseController {
	@Autowired
	private CourseService courseService;
	@Autowired
	private CustormerUserDetailsService cus;

	@RequestMapping("")
	public String index(CourseDto courseDto) {
		return "course/course";
	}

	@RequestMapping(value = "/createCourse", method = RequestMethod.POST)
	public void createCourse(@ModelAttribute("courseDto") CourseDto courseDto, HttpServletResponse response,
			Model model) throws IOException {
		System.out.println(courseDto.isStatus());

		if (cus.getUsername() != null) {
			courseDto.setCreateBy(cus.getUsername());
			courseService.addCoures(courseDto);
			response.sendRedirect("/course/showdetailCourse");
		} else {
			response.sendRedirect("/login");
		}

	

	}

	@RequestMapping(value = "/showdetailCourse")
	public String showdetailCourse(org.springframework.ui.Model model) {
		String email = cus.getUsername();
		List<CourseModel> listCourseEmail = courseService.getAllCourseByEmail(email);
		model.addAttribute("listCourse", listCourseEmail);
		return "course/showdetailcourse";
	}

	@RequestMapping(value = "/showCourse")
	public String indexShowCourse(org.springframework.ui.Model model, CourseDto courseDto) {
        model.addAttribute("listCourse", courseService.getAllCourse());
		return "course/showCourse";
	}
	

	@RequestMapping(value = "/showdetailCoursePram")
	public String showdetailCourseHome(org.springframework.ui.Model model
			,@RequestParam(value = "email") String email) {
	
		List<CourseModel> listCourseEmail = courseService.getAllCourseByEmail(email);
		model.addAttribute("listCourse", listCourseEmail);
		return "course/showdetailcourse";
	}

}
