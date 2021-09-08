package trueblue.elearning.course.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.hibernate.query.criteria.internal.expression.function.AggregationFunction.MAX;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.support.PagedListHolder;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import groovyjarjarpicocli.CommandLine.Model;
import trueblue.elearning.config.PagebleSort;
import trueblue.elearning.course.dto.CourseDto;
import trueblue.elearning.course.service.CourseService;
import trueblue.elearning.crouse.model.Course;
import trueblue.elearning.user.service.CustormerUserDetailsService;

@Controller
@RequestMapping("/course")
public class CourseController {
	@Autowired
	private CourseService courseService;
	@Autowired
	private CustormerUserDetailsService cus;
	
	

	@RequestMapping("")
	public String index(CourseDto courseDto,HttpServletRequest request) {
		request.getSession().setAttribute("listCoursePage", request);
		
		return "course/course";
	}

	@RequestMapping(value = "/createCourse", method = RequestMethod.POST)
	public String createCourse(@ModelAttribute("courseDto") CourseDto courseDto, HttpServletResponse response,org.springframework.ui.Model modell) throws IOException {
		System.out.println(courseDto.isStatus());

		if (cus.getUsername() != null 
				&& !courseDto.getName().equals("") && !courseDto.getDescription().equals(""))  {
			courseDto.setCreateBy(cus.getUsername());
			courseService.addCoures(courseDto);
			modell.addAttribute("check", "true");
			
		} else {
			modell.addAttribute("check", "false");
		
		}
		return "/course/course";
	}

	@RequestMapping(value = "/showdetailCourse/{pageNumber}")
	public String showdetailCourse(org.springframework.ui.Model model,@PathVariable int pageNumber
			,HttpServletRequest request) throws IOException{
		String email = cus.getUsername();
		PagedListHolder<?> pages = (PagedListHolder<?>) request.getSession().getAttribute("listCoursePage");
	
	    List<Course> listCourseEmail1 = courseService.getAllCourseByEmail(email);
		
		List<Course> listCourseEmail = courseService.getAllCourseByEmail(email, PageRequest.of(pageNumber,7));
		PagebleSort<Course> pagbleSort = new PagebleSort<>();
		pagbleSort.Pageble(model,listCourseEmail1 , pages, pageNumber, request,"/course/showdetailCourse/","listCoursePage");
		
		
		model.addAttribute("listCourse", listCourseEmail);
		return "course/showdetailcourse";
	
		
		
	}

	@RequestMapping(value = "/showCourse/{pageNumber}")
	public String indexShowCourse(org.springframework.ui.Model model, CourseDto courseDto,@PathVariable int pageNumber
			,HttpServletRequest request) throws IOException{
		model.addAttribute("listCourse", courseService.getAllCourse(pageNumber));
		PagebleSort<Course> pagbleSort = new PagebleSort<>();
		PagedListHolder<?> pages = (PagedListHolder<?>) request.getSession().getAttribute("pageSort");
		List<Course> list =  courseService.getAllCourse();
		pagbleSort.Pageble(model,list , pages, pageNumber, request,"/course/showCourse/","pageSort");
		
		
		
		//model.addAttribute(null, list);
		return "course/showCourse";
	}

	@RequestMapping(value = "/showdetailCoursePram")
	public String showdetailCourseHome(org.springframework.ui.Model model,
			@RequestParam(value = "email") String email) {

		List<Course> listCourseEmail = courseService.getAllCourseByEmail(email);
		model.addAttribute("listCourse", listCourseEmail);
		return "course/showdetailcourse";
		
	}

	@GetMapping("/deleteById/{email}")
	public void deleteById(@RequestParam(value = "id") long id, HttpServletResponse response,
			@PathVariable(value = "email") String email, org.springframework.ui.Model model) throws IOException {
		try {
			if (cus.getUsername() == null) {
				response.sendRedirect("/login");
			}
			boolean check = courseService.checkEmail(id, cus.getUsername());

			if (email.equals(cus.getUsername()) && check == true) {
				courseService.deleteCourseById(id);
				response.sendRedirect("/course");
			} else {
				model.addAttribute("check", "false");
			}

		} catch (Exception e) {
			// TODO: handle exception
		}
		

	}

	@RequestMapping(value = "/edit")
	public String editCourse(org.springframework.ui.Model model, CourseDto courseDto,
			@RequestParam(value = "id") long id) {
		model.addAttribute("listCourse", courseService.EditCourseById(id));
		return "course/showCourse";
	}
	

	
	

}
