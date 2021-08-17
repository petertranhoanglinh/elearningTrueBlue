package trueblue.elearning.crouse.model;

import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import trueblue.elearning.common.model.AbstractEntity;


@Getter
@Setter
@Entity
@Table(name = "udemy_courses")
public class Course extends AbstractEntity{

	private String name;
	private String description;
	private String image;
	private long wiewcount;
	private String video;
	private boolean status;
	private String kindcourse;
	
}
