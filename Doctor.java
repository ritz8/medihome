package Proj.Consultation;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Doctor 
{
	@Id
	private String Doc_id;
	private String Doc_name;
	private String Contact;
	private int Experience;
	private String Speciality;
	private String Location;
	
	public Doctor()
	{
		
	}
	
	public String getDoc_id() 
	{
		return Doc_id;
	}

	public void setDoc_id(String doc_id) 
	{
		Doc_id = doc_id;
	}

	public String getDoc_name() 
	{
		return Doc_name;
	}

	public void setDoc_name(String doc_name) 
	{
		Doc_name = doc_name;
	}

	public String getContact() 
	{
		return Contact;
	}

	public void setContact(String contact) 
	{
		Contact = contact;
	}

	public int getExperience() 
	{
		return Experience;
	}

	public void setExperience(int experience) 
	{
		Experience = experience;
	}

	public String getSpeciality() 
	{
		return Speciality;
	}

	public void setSpeciality(String speciality) 
	{
		Speciality = speciality;
	}

	public String getLocation() 
	{
		return Location;
	}

	public void setLocation(String location) 
	{
		Location = location;
	}
	
}
