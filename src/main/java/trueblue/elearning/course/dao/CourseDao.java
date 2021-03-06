package trueblue.elearning.course.dao;

import java.time.LocalDateTime;
import java.util.List;

import javax.transaction.Transactional;


import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import trueblue.elearning.crouse.model.Course;
@Repository
public interface CourseDao extends JpaRepository<Course, Long>{
	

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
     public List<Course> getAllCourseByEmail(String email, Pageable pageable);
     
     @Query(value ="   SELECT * FROM udemy_courses     "
      		+ "        WHERE create_by = :email        "
      		, nativeQuery = true)
      public List<Course> getAllCourseByEmail(String email);
     
     @Query(value ="   SELECT * FROM udemy_courses     "
      		+ "        WHERE create_by = :email        "
      		+ "           AND       id = :id           "
      		, nativeQuery = true)
      public List<Course> checkIdByemail(long  id, String email);

}
