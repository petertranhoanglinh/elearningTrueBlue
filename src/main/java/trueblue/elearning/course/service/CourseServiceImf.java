package trueblue.elearning.course.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import trueblue.elearning.course.dao.CourseDao;
import trueblue.elearning.course.dto.CourseDto;
import trueblue.elearning.crouse.model.Course;



@Service
public class CourseServiceImf implements CourseService {
	@Autowired CourseDao courseDao;

	@Override
	public void addCoures(CourseDto courseDto) {
		// TODO Auto-generated method stub
		Course newCourse  = new  Course();
		
		newCourse.setCreateBy(courseDto.getCreateBy());
		newCourse.setDescription(courseDto.getDescription());
		newCourse.setImage(courseDto.getImage());
		newCourse.setKindcourse(courseDto.getKindcourse());
		newCourse.setStatus(courseDto.isStatus());
		newCourse.setName(courseDto.getName());
		newCourse.setVideo(courseDto.getVideo());
		
		courseDao.save(newCourse);
		
		
		
		
	
		
	
		
		
		
		
		
	}

	
}
