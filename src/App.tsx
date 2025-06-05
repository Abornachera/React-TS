import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function App() {
  return (
      <Card className="w-96 bg-white shadow-lg rounded-lg">
        <CardHeader>
          <div className="flex justify-center">
            <Avatar className="h-50 w-50">
              <AvatarImage src="src/assets/images/Avatar.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <CardTitle>Anderson Bornachera Balaguera</CardTitle> 
          <CardDescription className= "text-blue-600">Systems Engineer</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Systems Engineering student nearing graduation, with a focus on web development. 
            A learner in everything, an expert in nothing — for now.
          </p>
          {/* Social Media Links */}
          <div className="flex justify gap-4 mt-4 text-blue-600 text-2xl">
            <a href="https://github.com/Abornachera" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/anderson-bornachera-balaguera-45b499280/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://x.com/AndersonBornac2" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </CardContent>
      </Card>
  )
}

export default App