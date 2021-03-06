package trueblue.elearning.course.service;

import java.util.List;

import org.springframework.data.domain.Pageable;

import trueblue.elearning.course.dto.CourseDto;

import trueblue.elearning.crouse.model.Course;


public interface CourseService {
	public void addCoures(CourseDto courseDto);
	public List<Course> getAllCourseByEmail(String email, int pageNumber);
	public List<Course> getAllCourseByEmail(String email);
	public List<Course> getAllCourse();
	public void deleteCourseById(long id);
	public Course getCourseById(long id);
	public boolean checkEmail  (long id, String email);
	List<Course> getAllCourse(int pageNumber);

}
