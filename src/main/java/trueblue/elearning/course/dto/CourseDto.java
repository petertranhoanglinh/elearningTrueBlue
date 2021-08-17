package trueblue.elearning.course.dto;

public class CourseDto {
	private String name;
	private String description;
	private String image;
	private long wiewcount;
	private String video;
	private boolean status;
	private String kindcourse;
	
	
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public long getWiewcount() {
		return wiewcount;
	}
	public void setWiewcount(long wiewcount) {
		this.wiewcount = wiewcount;
	}
	public String getVideo() {
		return video;
	}
	public void setVideo(String video) {
		this.video = video;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public String getKindcourse() {
		return kindcourse;
	}
	public void setKindcourse(String kindcourse) {
		this.kindcourse = kindcourse;
	}
	
	

}
