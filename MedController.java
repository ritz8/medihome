package Proj.Consultation;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
public class RCC 
{
	private MedRepos r;
	
	@Autowired
	public void f1(MedRepos y)
	{
		System.out.println("Autowired Successfully");
		r=y;
	}
	
	@GetMapping("/location")
	public OutClass<Location> getLocation(@RequestParam("loc") String loct)
	{
		OutClass<Location> out = new OutClass<Location>();
		List<Location> z = r.getLoct(loct);
		Iterator<Location> it = z.iterator();
		while(it.hasNext())
		{
			it.next();
			out.setStatus(1);
		}
		out.setContent(z);
		return out;
	}
	
	@GetMapping("/doctor")
	public OutClass<Doctor> getDoct(@RequestParam("loc") String loct, @RequestParam("spec") String spcl)
	{
		OutClass<Doctor> out = new OutClass<Doctor>();
		List<Doctor> z = r.getDoctors(loct,spcl);
		Iterator<Doctor> it = z.iterator();
		while(it.hasNext())
		{
			it.next();
			out.setStatus(1);
		}
		out.setContent(z);
		out.setNoofrow(z.size());
		return out;
	}
	
}
