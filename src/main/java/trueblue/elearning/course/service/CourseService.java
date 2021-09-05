package trueblue.elearning.course.service;

import java.util.List;

import trueblue.elearning.course.dto.CourseDto;
import trueblue.elearning.course.model.CourseModel;
import trueblue.elearning.crouse.model.Course;


public interface CourseService {
	public void addCoures(CourseDto courseDto);
	public List<CourseModel> getAllCourseByEmail(String email);
	public List<Course> getAllCourse();
	public void deleteCourseById(long id);

}
