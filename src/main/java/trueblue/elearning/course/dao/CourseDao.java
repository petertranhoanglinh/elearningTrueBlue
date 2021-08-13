package trueblue.elearning.course.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import trueblue.elearning.crouse.model.Course;

public interface CourseDao extends JpaRepository<Course, String>{
	

}
