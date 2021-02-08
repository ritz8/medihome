package Proj.Consultation;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Location 
{
	@Id
	private String Id;
	private String Name;
	 
	public Location()
	{
		
	}

	public String getId() 
	{
		return Id;
	}

	public void setId(String id) 
	{
		Id = id;
	}

	public String getName() 
	{
		return Name;
	}

	public void setName(String name) 
	{
		Name = name;
	}

	@Override
	public String toString() {
		return "Location [Id=" + Id + ", Name=" + Name + "]";
	}

	
	

}
