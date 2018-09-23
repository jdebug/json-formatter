package com.jsp.jsonformatter.angularboot;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
public class HeartBeatController {

	@GetMapping(path = "/heartbeat")
	public String heartBeat(){
		return "I have a good \u2764";
	}
}
