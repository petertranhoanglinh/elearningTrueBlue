package trueblue.elearning.user.model;

import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import trueblue.elearning.common.model.AbstractEntity;


@Getter
@Setter
@Entity
@Table(name = "udemy_users")
public class Users extends AbstractEntity{

	
	private String email;
	private String password;
	private String fullname;
	private String address;
	private String phone;
	private String avatar;
	private String status;
	
}
