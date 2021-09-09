package trueblue.elearning.course.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import trueblue.elearning.course.dao.CourseDao;
import trueblue.elearning.course.dto.CourseDto;
import trueblue.elearning.course.model.CourseModel;
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

	@Override
	public List<Course> getAllCourseByEmail(String email , int numberpage) {
		// TODO Auto-generated method stub
		return this.courseDao.getAllCourseByEmail(email, PageRequest.of(numberpage, 5));
	}

	@Override
	public List<Course> getAllCourse() {
		// TODO Auto-generated method stub
		return this.courseDao.findAll();
	}

	@Override
	public void deleteCourseById(long id) {
		// TODO Auto-generated method stub
		courseDao.deleteById(id);
	}

	@Override
	public Course getCourseById(long id) {
		// TODO Auto-generated method stub
		return this.courseDao.getById(id);
	}

	@Override
	public boolean checkEmail(long id, String email) {
		// TODO Auto-generated method stub
		if(courseDao.checkIdByemail(id, email) == null) {
			return false;
		}
		return true;
	}

	@Override
	public List<Course> getAllCourseByEmail(String email) {
		// TODO Auto-generated method stub
		return courseDao.getAllCourseByEmail(email);
	}
	
	@Override
	public List<Course> getAllCourse(int pageNumber) {
		// TODO Auto-generated method stub
		return this.courseDao.findAll(PageRequest.of(pageNumber, 5)).getContent();
	}

	

	
}
