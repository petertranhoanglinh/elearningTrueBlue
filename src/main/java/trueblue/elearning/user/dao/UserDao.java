package trueblue.elearning.user.dao;

import java.util.List;

import javax.transaction.Transactional;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import trueblue.elearning.user.model.UserModel;
import trueblue.elearning.user.model.Users;


@Repository
public interface UserDao extends PagingAndSortingRepository<Users, String>{
	 @Query(value="SELECT  *"
	            +" from udemy_Users"
				, nativeQuery = true)                                                                                                         
		public List<UserModel> ListGroup(Pageable pageable);
	 
	 @Query(value="SELECT  *"
	            +" FROM udemy_Users "
	            + "WHERE fullname Like :fullname OR email like :fullname "
	            + " OR :fullname = '1' "
	            + "ORDER BY ID" 
				, nativeQuery = true)                                                                                                               
		public List<UserModel> findByEmail(String fullname);
    
	 @Query(value="SELECT  *"
	            +" from udemy_Users "
	            + "where email Like :email "
				, nativeQuery = true)                                                                                                   
		public List<UserModel> findByEmailReal(String email);
	 

	@Transactional
	@Modifying
	@Query(value = "UPDATE udemy_users                " 
			+ "        SET fullname = :fullname       "
			+ "          , avatar   = :avatar         "
			+ "          , phone   = :phone           "
			+ "          , address   = :address       "
			+ "          , password   = :password     "
			+ "          , version    =  version + 1  "
			+ "          , update_by  = :fullname     "
			+ "      WHERE email = :email             "
	        , nativeQuery = true)
    public void Account(String email, String fullname, String address, String avatar, String phone, String password );
}
