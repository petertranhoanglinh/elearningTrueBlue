package trueblue.elearning.common.model;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Version;

import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Getter;
import lombok.Setter;
import trueblue.elearning.user.dao.UserDao;
import trueblue.elearning.utils.DateUtils;

@Setter
@Getter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public class AbstractEntity implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(updatable = false)
	public Long id;
	
	@Version
	public int version;
	
	@CreatedBy
	public String createBy;
	
	@LastModifiedBy
	public String updateBy;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = DateUtils.DATE_FORMAT)
	@CreatedDate
	@DateTimeFormat(pattern = DateUtils.DATE_FORMAT)
	@Column(name = "create_at", nullable = false, updatable = false)
	public LocalDateTime createAt;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = DateUtils.DATE_FORMAT)
	@LastModifiedDate
	@DateTimeFormat(pattern = DateUtils.DATE_FORMAT)
	@Column(name = "update_at", nullable = false, updatable = false)
	public LocalDateTime updateAt;
}
