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
import org.springframework.web.bind.annotation.RequestBody;
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
		request.getSession().setAttribute("listCoursePage", null);
		request.getSession().setAttribute("listCoursePage1", null);
		request.getSession().setAttribute("pageSort", null);
		
		return "course/course";
	}

	@RequestMapping(value = "/createCourse", method = RequestMethod.POST)
	public String createCourse(@ModelAttribute("courseDto") CourseDto courseDto, HttpServletResponse response,org.springframework.ui.Model modell) throws IOException {

		if (cus.getUsername() != null 
				&& !courseDto.getName().equals("") && !courseDto.getDescription().equals(""))  {
			courseDto.setCreateBy(cus.getUsername());
			courseDto.setCheckSave("true");
			modell.addAttribute(courseDto.getCheckSave());
			courseService.addCoures(courseDto);
		
		} else {
			courseDto.setCheckSave("false");
			modell.addAttribute(courseDto.getCheckSave());
		
		}
		return "/course/course";
	}

	@RequestMapping(value = "/showdetailCourse/{pageNumber}")
	public String showdetailCourse(org.springframework.ui.Model model,@PathVariable int pageNumber
			,HttpServletRequest request) throws IOException{
		String email = cus.getUsername();
		System.out.println(email);
		PagedListHolder<?> pages = (PagedListHolder<?>) request.getSession().getAttribute("listCoursePage");
		int pagesize = 3;
	    List<Course> listCourseEmail1 = courseService.getAllCourseByEmail(email);
		
		List<Course> listCourseEmail = courseService.getAllCourseByEmail(email, pageNumber);
		
		if (pages == null) {
			pages = new PagedListHolder<>(listCourseEmail1);
			pages.setPageSize(pagesize);
		} else {
			final int goToPage = pageNumber - 1;
			if (goToPage <= pages.getPageCount() && goToPage >= 0) {
				pages.setPage(goToPage);
			}
		}
		request.getSession().setAttribute("listCoursePage", pages);
		int current = pages.getPage()+1;
		int begin = Math.max(0, current - listCourseEmail1.size());
		int end = Math.min(begin + 5, pages.getPageCount());
		int totalPageCount = pages.getPageCount();
		String baseUrl = "/course/showdetailCourse/";
		model.addAttribute("beginIndex", begin);
		model.addAttribute("endIndex", end);
		model.addAttribute("currentIndex", current);
		model.addAttribute("totalPageCount", totalPageCount);
		model.addAttribute("baseUrl", baseUrl);
		model.addAttribute("employees", pages);
		
		
		
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

	@RequestMapping(value = "/showdetailCoursePram/{email}/{pageNumber}")
	public String showdetailCourseHome(org.springframework.ui.Model model,
			@PathVariable(value = "email") String email,
			@PathVariable (value = "pageNumber")int pageNumber,HttpServletRequest request) {
		PagebleSort<Course> pagbleSort = new PagebleSort<>();
		PagedListHolder<?> pages1 = (PagedListHolder<?>) request.getSession().getAttribute("listCoursePage1");
		List<Course> listCourseEmail = courseService.getAllCourseByEmail(email);
		List<Course> listCourseEmail1 = courseService.getAllCourseByEmail(email, pageNumber);
		pagbleSort.Pageble(model,listCourseEmail , pages1, pageNumber, request,"/course/showdetailCoursePram/"+email+"/","listCoursePage1");
		model.addAttribute("listCourse", listCourseEmail1);
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
				response.sendRedirect("/course/showdetailCourse/1");
			} 

		} catch (Exception e) {
			// TODO: handle exception
		}
		

	}

	@GetMapping(value = "/edit" )
	public String editCourse(org.springframework.ui.Model model, @ModelAttribute("courseDto") CourseDto courseDto,
			@RequestParam(value = "id") long id) {
		
		Course course =  courseService.getCourseById(id) ;
		courseDto.setCreateBy(course.getCreateBy());
		courseDto.setDescription(course.getDescription());
		courseDto.setName(course.getName());
		courseDto.setImage(course.getImage());
		return "course/editCourse";
	}
	

	
	

}
