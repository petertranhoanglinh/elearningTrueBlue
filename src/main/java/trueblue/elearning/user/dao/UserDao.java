package trueblue.elearning.user.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import trueblue.elearning.user.model.UserModel;
import trueblue.elearning.user.model.Users;



@Repository
public interface UserDao extends PagingAndSortingRepository<Users, String>{
	 @Query(value="SELECT  *"
	            +" from udemy_Users"
				, nativeQuery = true)                                                                                                         
		public List<UserModel> ListGroup();
	 
	 @Query(value="SELECT  *"
	            +" from udemy_Users "
	            + "where fullname Like :fullname "
				, nativeQuery = true)                                                                                                         
		public List<UserModel> findByEmail(String fullname);
    
	 @Query(value="SELECT  *"
	            +" from udemy_Users "
	            + "where email Like :email "
				, nativeQuery = true)                                                                                                         
		public List<UserModel> findByEmailReal(String email);
	

}
