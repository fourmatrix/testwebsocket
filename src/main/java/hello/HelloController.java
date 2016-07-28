package hello;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class HelloController {


    @MessageMapping("/hello2")
    @SendTo("/topic/greetings")
    public Greeting greeting(HelloMessage message)  {
        try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} // simulated delay
        return new Greeting("Hello, " + message.getName() + "! " + System.currentTimeMillis());
    }

}