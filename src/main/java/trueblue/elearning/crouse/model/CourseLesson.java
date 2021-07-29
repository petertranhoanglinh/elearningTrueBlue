package trueblue.elearning.crouse.model;

import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import trueblue.elearning.common.model.AbstractEntity;

@Getter
@Setter
@Entity
@Table(name = "udemy_course_lesson")
public class CourseLesson extends AbstractEntity{
	
	private String name;
	private String description;
	private String video;
	private String slide;
	private boolean status;
	
}
