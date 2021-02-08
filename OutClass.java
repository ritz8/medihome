package Proj.Consultation;

import java.util.List;

public class OutClass<T>
{
	private int status;
	private List<T> content;
	private int noofrow;
	private String str;
	
	public String getStr() {
		return str;
	}

	public void setStr(String str) {
		this.str = str;
	}

	public OutClass()
	{
		
	}

	public int getStatus() {
		return status;
	}

	@Override
	public String toString() {
		return "OutClass [status=" + status + ", content=" + content + ", noofrow=" + noofrow + "]";
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public List<T> getContent() {
		return content;
	}

	public void setContent(List<T> content) {
		this.content = content;
	}

	public int getNoofrow() {
		return noofrow;
	}

	public void setNoofrow(int noofrow) {
		this.noofrow = noofrow;
	}
}
