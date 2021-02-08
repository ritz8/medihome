package Proj.Consultation;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface XRepos extends JpaRepository<Location,String>
{
	@Query("from Location where Name = :loc")
	List<Location> getLoct(@Param("loc") String loct);
	
	@Query("from Doctor where Location =:loc AND Speciality = :spec")
	List<Doctor> getDoctors(@Param("loc") String loct, @Param("spec") String specia);
}
