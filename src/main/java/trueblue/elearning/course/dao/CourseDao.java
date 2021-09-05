package trueblue.elearning.course.dao;

import java.time.LocalDateTime;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import trueblue.elearning.course.model.CourseModel;
import trueblue.elearning.crouse.model.Course;

public interface CourseDao extends JpaRepository<Course, String>{
	

	@Transactional
	@Modifying
	@Query(value = " UPDATE udemy_courses               "    
            +"       SET                                "
            +"          CREATE_AT   = :datetime,        "
            +"          CREATE_BY   = :createBy,        "
            +"          VERSION     =  1       ,        "
            +"          DESCRIPTION = :desciption,      "
            +"          image       = :image,           "
            +"          KINDCOURSE  = :kindCourse,      "
			+"          name        = :nameCourse,      "
	        +"          video       = :video            "
	
	    , nativeQuery = true)
    public void Account(LocalDateTime datetime, String createBy, String desciption,
    		String image, String kindCourse, String nameCourse, String video);
	
	
	
	
     @Query(value ="   SELECT * FROM udemy_courses     "
     		+ "        WHERE create_by = :email        "
     		, nativeQuery = true)
     public List<CourseModel> getAllCourseByEmail(String email);

}
