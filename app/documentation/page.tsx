import { BookOpen, Code, Download, FileText, Info, Layers, Settings, Terminal, Zap, Mail } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DocumentationPage() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Documentation</h1>
        <p className="text-muted-foreground">Comprehensive guide to the Face Recognition Attendance System</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-4">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardHeader className="pb-4">
              <CardTitle>Contents</CardTitle>
            </CardHeader>
            <CardContent>
              <nav className="flex flex-col space-y-1">
                <a href="#introduction" className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-muted">
                  <Info className="mr-2 h-4 w-4" />
                  Introduction
                </a>
                <a href="#tech-stack" className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-muted">
                  <Layers className="mr-2 h-4 w-4" />
                  Tech Stack
                </a>
                <a href="#setup-guide" className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-muted">
                  <Terminal className="mr-2 h-4 w-4" />
                  Setup Guide
                </a>
                <a href="#how-it-works" className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-muted">
                  <Zap className="mr-2 h-4 w-4" />
                  How It Works
                </a>
                <a href="#user-guide" className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-muted">
                  <BookOpen className="mr-2 h-4 w-4" />
                  User Guide
                </a>
                <a href="#api-reference" className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-muted">
                  <Code className="mr-2 h-4 w-4" />
                  API Reference
                </a>
                <a href="#deployment" className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-muted">
                  <Settings className="mr-2 h-4 w-4" />
                  Deployment
                </a>
                <a href="#resources" className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-muted">
                  <FileText className="mr-2 h-4 w-4" />
                  Resources
                </a>
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Introduction */}
          <section id="introduction" className="scroll-mt-16">
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  <CardTitle>Introduction</CardTitle>
                </div>
                <CardDescription>Overview of the Face Recognition Attendance System</CardDescription>
              </CardHeader>
              <CardContent className="prose max-w-none dark:prose-invert">
                <p>
                  The Face Recognition Attendance System is an AI-powered solution developed for Dayananda Sagar
                  University to automate and streamline the attendance tracking process. This system leverages computer
                  vision and machine learning technologies to recognize students' faces and mark their attendance in
                  real-time.
                </p>

                <h3>Key Features</h3>
                <ul>
                  <li>Real-time face detection and recognition</li>
                  <li>Automated attendance marking</li>
                  <li>Comprehensive student database management</li>
                  <li>Detailed attendance reports and analytics</li>
                  <li>User-friendly interface for administrators and faculty</li>
                  <li>Secure and privacy-compliant implementation</li>
                </ul>

                <h3>Benefits</h3>
                <ul>
                  <li>Eliminates manual attendance taking, saving valuable class time</li>
                  <li>Prevents proxy attendance and ensures accuracy</li>
                  <li>Provides instant access to attendance records</li>
                  <li>Generates automated reports for analysis</li>
                  <li>Integrates with existing university systems</li>
                </ul>

                <p>
                  This documentation provides comprehensive information about the system architecture, setup process,
                  usage guidelines, and technical details to help users effectively implement and utilize the Face
                  Recognition Attendance System.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Tech Stack */}
          <section id="tech-stack" className="scroll-mt-16">
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Layers className="h-5 w-5 text-primary" />
                  <CardTitle>Tech Stack</CardTitle>
                </div>
                <CardDescription>Technologies and frameworks used in the system</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="frontend">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="frontend">Frontend</TabsTrigger>
                    <TabsTrigger value="backend">Backend</TabsTrigger>
                    <TabsTrigger value="ml">ML Components</TabsTrigger>
                  </TabsList>

                  <TabsContent value="frontend" className="mt-4">
                    <div className="rounded-lg border p-4">
                      <h3 className="mb-4 text-lg font-medium">Frontend Technologies</h3>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-md bg-muted p-3">
                          <h4 className="font-medium">Next.js</h4>
                          <p className="text-sm text-muted-foreground">
                            React framework for building the user interface
                          </p>
                        </div>
                        <div className="rounded-md bg-muted p-3">
                          <h4 className="font-medium">Tailwind CSS</h4>
                          <p className="text-sm text-muted-foreground">Utility-first CSS framework for styling</p>
                        </div>
                        <div className="rounded-md bg-muted p-3">
                          <h4 className="font-medium">shadcn/ui</h4>
                          <p className="text-sm text-muted-foreground">
                            Reusable UI components built with Radix UI and Tailwind
                          </p>
                        </div>
                        <div className="rounded-md bg-muted p-3">
                          <h4 className="font-medium">TypeScript</h4>
                          <p className="text-sm text-muted-foreground">
                            Typed JavaScript for better development experience
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="backend" className="mt-4">
                    <div className="rounded-lg border p-4">
                      <h3 className="mb-4 text-lg font-medium">Backend Technologies</h3>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-md bg-muted p-3">
                          <h4 className="font-medium">Python</h4>
                          <p className="text-sm text-muted-foreground">Core programming language for backend logic</p>
                        </div>
                        <div className="rounded-md bg-muted p-3">
                          <h4 className="font-medium">Streamlit</h4>
                          <p className="text-sm text-muted-foreground">Framework for creating web applications</p>
                        </div>
                        <div className="rounded-md bg-muted p-3">
                          <h4 className="font-medium">SQLite</h4>
                          <p className="text-sm text-muted-foreground">Embedded database for storing student records</p>
                        </div>
                        <div className="rounded-md bg-muted p-3">
                          <h4 className="font-medium">YAML</h4>
                          <p className="text-sm text-muted-foreground">Configuration file format for system settings</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="ml" className="mt-4">
                    <div className="rounded-lg border p-4">
                      <h3 className="mb-4 text-lg font-medium">Machine Learning Components</h3>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-md bg-muted p-3">
                          <h4 className="font-medium">face_recognition</h4>
                          <p className="text-sm text-muted-foreground">Library for face detection and recognition</p>
                        </div>
                        <div className="rounded-md bg-muted p-3">
                          <h4 className="font-medium">dlib</h4>
                          <p className="text-sm text-muted-foreground">
                            Machine learning toolkit with facial recognition capabilities
                          </p>
                        </div>
                        <div className="rounded-md bg-muted p-3">
                          <h4 className="font-medium">OpenCV</h4>
                          <p className="text-sm text-muted-foreground">Computer vision library for image processing</p>
                        </div>
                        <div className="rounded-md bg-muted p-3">
                          <h4 className="font-medium">NumPy</h4>
                          <p className="text-sm text-muted-foreground">
                            Numerical computing library for array operations
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </section>

          {/* Setup Guide */}
          <section id="setup-guide" className="scroll-mt-16">
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-primary" />
                  <CardTitle>Setup Guide</CardTitle>
                </div>
                <CardDescription>Instructions for setting up the system</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="prerequisites">
                    <AccordionTrigger>Prerequisites</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p className="text-sm">
                          Before installing the Face Recognition Attendance System, ensure you have the following
                          prerequisites:
                        </p>
                        <ul className="ml-6 list-disc space-y-2 text-sm">
                          <li>Python 3.9 or higher</li>
                          <li>Webcam or camera device</li>
                          <li>Git (for cloning the repository)</li>
                          <li>C++ compiler (for dlib installation)</li>
                          <li>CMake (for dlib installation)</li>
                        </ul>
                        <div className="rounded-md bg-muted p-3">
                          <p className="text-sm font-medium">System Requirements:</p>
                          <ul className="ml-4 list-disc text-sm text-muted-foreground">
                            <li>CPU: Intel Core i5 or equivalent (i7 recommended)</li>
                            <li>RAM: 8GB minimum (16GB recommended)</li>
                            <li>Storage: 1GB free space</li>
                            <li>OS: Windows 10/11, macOS, or Linux</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="installation">
                    <AccordionTrigger>Installation</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p className="text-sm">Follow these steps to install the Face Recognition Attendance System:</p>
                        <ol className="ml-6 list-decimal space-y-4 text-sm">
                          <li>
                            <p className="font-medium">Clone the repository:</p>
                            <pre className="mt-2 rounded-md bg-muted p-2 font-mono text-xs">
                              git clone https://github.com/datct00/Face-recognition-app-using-Streamlit.git
                              <br />
                              cd Face-recognition-app-using-Streamlit
                            </pre>
                          </li>
                          <li>
                            <p className="font-medium">Install dependencies:</p>
                            <pre className="mt-2 rounded-md bg-muted p-2 font-mono text-xs">
                              pip install -r requirements.txt
                            </pre>
                          </li>
                          <li>
                            <p className="font-medium">Create dataset directory:</p>
                            <pre className="mt-2 rounded-md bg-muted p-2 font-mono text-xs">mkdir -p dataset</pre>
                          </li>
                          <li>
                            <p className="font-medium">Run the application:</p>
                            <pre className="mt-2 rounded-md bg-muted p-2 font-mono text-xs">
                              streamlit run Tracking.py
                            </pre>
                          </li>
                        </ol>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="configuration">
                    <AccordionTrigger>Configuration</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p className="text-sm">
                          Configure the system by modifying the <code>config.yaml</code> file:
                        </p>
                        <pre className="rounded-md bg-muted p-3 font-mono text-xs">
                          PATH:
                          <br />
                          &nbsp;&nbsp;DATASET_DIR: "dataset/"
                          <br />
                          &nbsp;&nbsp;PKL_PATH: "dataset/database.pkl"
                          <br />
                          <br />
                          INFO:
                          <br />
                          &nbsp;&nbsp;PICTURE_PROMPT: "Upload an image to recognize faces"
                          <br />
                          &nbsp;&nbsp;WEBCAM_PROMPT: "Use webcam to recognize faces in real-time"
                        </pre>
                        <p className="text-sm">You can customize the following settings:</p>
                        <ul className="ml-6 list-disc space-y-2 text-sm">
                          <li>Dataset directory path</li>
                          <li>Database file path</li>
                          <li>User interface prompts</li>
                          <li>Recognition tolerance (in the application)</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="troubleshooting">
                    <AccordionTrigger>Troubleshooting</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p className="text-sm">Common issues and their solutions:</p>
                        <div className="space-y-3">
                          <div className="rounded-md bg-muted p-3">
                            <p className="font-medium">Issue: dlib installation fails</p>
                            <p className="text-sm text-muted-foreground">
                              Solution: Install CMake and a C++ compiler, then try installing dlib separately:
                              <br />
                              <code>pip install dlib</code>
                            </p>
                          </div>
                          <div className="rounded-md bg-muted p-3">
                            <p className="font-medium">Issue: Webcam not detected</p>
                            <p className="text-sm text-muted-foreground">
                              Solution: Ensure your webcam is connected and not being used by another application. Try
                              changing the camera index in the code.
                            </p>
                          </div>
                          <div className="rounded-md bg-muted p-3">
                            <p className="font-medium">Issue: Face not recognized</p>
                            <p className="text-sm text-muted-foreground">
                              Solution: Adjust the recognition tolerance in the settings. Ensure proper lighting and
                              face positioning.
                            </p>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </section>

          {/* How It Works */}
          <section id="how-it-works" className="scroll-mt-16">
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <CardTitle>How It Works</CardTitle>
                </div>
                <CardDescription>Technical explanation of the system's operation</CardDescription>
              </CardHeader>
              <CardContent className="prose max-w-none dark:prose-invert">
                <h3>Face Recognition Process</h3>
                <p>
                  The Face Recognition Attendance System uses a multi-step process to detect, recognize, and record
                  student attendance:
                </p>

                <ol>
                  <li>
                    <strong>Image Acquisition:</strong> The system captures images either through a webcam in real-time
                    or from uploaded image files.
                  </li>
                  <li>
                    <strong>Face Detection:</strong> Using the HOG (Histogram of Oriented Gradients) method, the system
                    detects faces in the captured images.
                  </li>
                  <li>
                    <strong>Face Landmark Detection:</strong> For each detected face, 68 specific points (landmarks) are
                    identified to map facial features.
                  </li>
                  <li>
                    <strong>Face Encoding:</strong> Each face is converted into a 128-dimensional vector (face encoding)
                    using a pre-trained neural network.
                  </li>
                  <li>
                    <strong>Face Comparison:</strong> The system compares the face encoding with the encodings stored in
                    the database using Euclidean distance.
                  </li>
                  <li>
                    <strong>Identity Matching:</strong> If a match is found within the specified tolerance, the system
                    identifies the student.
                  </li>
                  <li>
                    <strong>Attendance Recording:</strong> The system records the attendance with a timestamp in the
                    database.
                  </li>
                </ol>

                <h3>Database Management</h3>
                <p>The system uses a combination of file-based storage and serialization for managing student data:</p>

                <ul>
                  <li>
                    <strong>Student Images:</strong> Stored in the dataset directory with filename format{" "}
                    <code>ID_Name.jpg</code>.
                  </li>
                  <li>
                    <strong>Face Encodings:</strong> Computed from student images and stored in a serialized database
                    file using Python's pickle module.
                  </li>
                  <li>
                    <strong>Attendance Records:</strong> Stored in a structured format with timestamps for each
                    attendance event.
                  </li>
                </ul>

                <h3>System Architecture</h3>
                <p>The system follows a modular architecture with the following components:</p>

                <ul>
                  <li>
                    <strong>Tracking Module:</strong> Handles real-time face recognition and attendance tracking.
                  </li>
                  <li>
                    <strong>Database Module:</strong> Manages student records and attendance data.
                  </li>
                  <li>
                    <strong>Updating Module:</strong> Provides functionality for adding, updating, and deleting student
                    records.
                  </li>
                  <li>
                    <strong>Utility Module:</strong> Contains helper functions for face recognition and database
                    operations.
                  </li>
                </ul>

                <div className="not-prose rounded-lg border p-4">
                  <h4 className="mb-4 text-lg font-medium">Performance Considerations</h4>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-md bg-muted p-3">
                      <p className="font-medium">Recognition Accuracy</p>
                      <p className="text-sm text-muted-foreground">
                        The system achieves 99.38% accuracy on standard benchmarks. Factors affecting accuracy include
                        lighting, face angle, and image quality.
                      </p>
                    </div>
                    <div className="rounded-md bg-muted p-3">
                      <p className="font-medium">Processing Speed</p>
                      <p className="text-sm text-muted-foreground">
                        Face recognition typically takes 100-500ms per face, depending on hardware. Multiple faces can
                        increase processing time.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* User Guide */}
          <section id="user-guide" className="scroll-mt-16">
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <CardTitle>User Guide</CardTitle>
                </div>
                <CardDescription>Instructions for using the system</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="tracking">
                    <AccordionTrigger>Tracking Attendance</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p className="text-sm">To track attendance using the system:</p>
                        <ol className="ml-6 list-decimal space-y-2 text-sm">
                          <li>Navigate to the Live Attendance page</li>
                          <li>Choose between webcam or image upload mode</li>
                          <li>For webcam mode, click "Start Webcam" to begin face recognition</li>
                          <li>For image upload mode, upload an image containing student faces</li>
                          <li>The system will automatically detect and recognize faces</li>
                          <li>Recognized students will be marked present in the database</li>
                          <li>View real-time recognition results in the status panel</li>
                        </ol>
                        <div className="rounded-md bg-muted p-3">
                          <p className="font-medium">Tips for Better Recognition:</p>
                          <ul className="ml-4 list-disc text-sm text-muted-foreground">
                            <li>Ensure good lighting conditions</li>
                            <li>Position faces directly toward the camera</li>
                            <li>Maintain appropriate distance from the camera</li>
                            <li>Adjust recognition tolerance if needed</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="managing">
                    <AccordionTrigger>Managing Student Records</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p className="text-sm">To manage student records in the system:</p>
                        <h4 className="font-medium">Adding a New Student</h4>
                        <ol className="ml-6 list-decimal space-y-2 text-sm">
                          <li>Navigate to the Settings page</li>
                          <li>Select the "Database" tab</li>
                          <li>Click "Add New Student"</li>
                          <li>Enter the student's name and USN</li>
                          <li>Upload a clear photo of the student's face or use the webcam to capture one</li>
                          <li>Click "Submit" to add the student to the database</li>
                        </ol>

                        <h4 className="font-medium">Updating Student Information</h4>
                        <ol className="ml-6 list-decimal space-y-2 text-sm">
                          <li>Navigate to the Records page</li>
                          <li>Find the student record you want to update</li>
                          <li>Click the "Edit" button</li>
                          <li>Modify the student's information as needed</li>
                          <li>Click "Save Changes" to update the record</li>
                        </ol>

                        <h4 className="font-medium">Deleting a Student</h4>
                        <ol className="ml-6 list-decimal space-y-2 text-sm">
                          <li>Navigate to the Records page</li>
                          <li>Find the student record you want to delete</li>
                          <li>Click the "Delete" button</li>
                          <li>Confirm the deletion when prompted</li>
                        </ol>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="reports">
                    <AccordionTrigger>Generating Reports</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p className="text-sm">To generate attendance reports:</p>
                        <ol className="ml-6 list-decimal space-y-2 text-sm">
                          <li>Navigate to the Records page</li>
                          <li>Use the filters to select the desired date range, branch, or specific students</li>
                          <li>Click "Generate Report" to create an attendance report</li>
                          <li>View the report on screen or export it in various formats</li>
                        </ol>

                        <h4 className="font-medium">Available Report Types</h4>
                        <ul className="ml-6 list-disc space-y-2 text-sm">
                          <li>Daily Attendance Report</li>
                          <li>Weekly Attendance Summary</li>
                          <li>Monthly Attendance Analysis</li>
                          <li>Student-wise Attendance Report</li>
                          <li>Low Attendance Alert Report</li>
                        </ul>

                        <h4 className="font-medium">Export Options</h4>
                        <ul className="ml-6 list-disc space-y-2 text-sm">
                          <li>CSV (Comma Separated Values)</li>
                          <li>Excel Spreadsheet</li>
                          <li>PDF Document</li>
                          <li>Print-ready Format</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="settings">
                    <AccordionTrigger>System Settings</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p className="text-sm">To configure system settings:</p>
                        <h4 className="font-medium">Recognition Settings</h4>
                        <ul className="ml-6 list-disc space-y-2 text-sm">
                          <li>
                            Adjust recognition tolerance (lower for stricter matching, higher for more permissive)
                          </li>
                          <li>Configure camera source for webcam capture</li>
                          <li>Enable/disable auto-marking of attendance</li>
                          <li>Toggle sound notifications for recognition events</li>
                        </ul>

                        <h4 className="font-medium">Database Settings</h4>
                        <ul className="ml-6 list-disc space-y-2 text-sm">
                          <li>Create database backups</li>
                          <li>Restore from previous backups</li>
                          <li>Rebuild the database from source images</li>
                          <li>Clear attendance records</li>
                        </ul>

                        <h4 className="font-medium">User Account Settings</h4>
                        <ul className="ml-6 list-disc space-y-2 text-sm">
                          <li>Update user profile information</li>
                          <li>Change password</li>
                          <li>Configure two-factor authentication</li>
                          <li>Manage notification preferences</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </section>

          {/* API Reference */}
          <section id="api-reference" className="scroll-mt-16">
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  <CardTitle>API Reference</CardTitle>
                </div>
                <CardDescription>Reference for the system's API functions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="rounded-lg border p-4">
                    <h3 className="mb-2 text-lg font-medium">Face Recognition Functions</h3>
                    <div className="space-y-4">
                      <div className="rounded-md bg-muted p-3">
                        <p className="font-mono text-sm font-medium">recognize(image, TOLERANCE)</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Recognizes faces in an image and returns the processed image with annotations, along with the
                          name and ID of recognized individuals.
                        </p>
                        <div className="mt-2">
                          <p className="text-xs font-medium">Parameters:</p>
                          <ul className="ml-4 list-disc text-xs text-muted-foreground">
                            <li>image: Input image (numpy array)</li>
                            <li>TOLERANCE: Recognition tolerance threshold (float)</li>
                          </ul>
                        </div>
                        <div className="mt-2">
                          <p className="text-xs font-medium">Returns:</p>
                          <ul className="ml-4 list-disc text-xs text-muted-foreground">
                            <li>image: Processed image with annotations</li>
                            <li>name: Name of recognized person (or "Unknown")</li>
                            <li>id: ID of recognized person (or "Unknown")</li>
                          </ul>
                        </div>
                      </div>

                      <div className="rounded-md bg-muted p-3">
                        <p className="font-mono text-sm font-medium">isFaceExists(image)</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Checks if there are any faces in the given image.
                        </p>
                        <div className="mt-2">
                          <p className="text-xs font-medium">Parameters:</p>
                          <ul className="ml-4 list-disc text-xs text-muted-foreground">
                            <li>image: Input image (numpy array)</li>
                          </ul>
                        </div>
                        <div className="mt-2">
                          <p className="text-xs font-medium">Returns:</p>
                          <ul className="ml-4 list-disc text-xs text-muted-foreground">
                            <li>Boolean: True if faces exist, False otherwise</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="mb-2 text-lg font-medium">Database Functions</h3>
                    <div className="space-y-4">
                      <div className="rounded-md bg-muted p-3">
                        <p className="font-mono text-sm font-medium">submitNew(name, id, image, old_idx=None)</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Adds a new student to the database or updates an existing one.
                        </p>
                        <div className="mt-2">
                          <p className="text-xs font-medium">Parameters:</p>
                          <ul className="ml-4 list-disc text-xs text-muted-foreground">
                            <li>name: Student name (string)</li>
                            <li>id: Student ID (string)</li>
                            <li>image: Student face image (file or numpy array)</li>
                            <li>old_idx: Index of existing record to update (optional)</li>
                          </ul>
                        </div>
                        <div className="mt-2">
                          <p className="text-xs font-medium">Returns:</p>
                          <ul className="ml-4 list-disc text-xs text-muted-foreground">
                            <li>1: Success</li>
                            <li>0: ID already exists</li>
                            <li>-1: No face in the image</li>
                          </ul>
                        </div>
                      </div>

                      <div className="rounded-md bg-muted p-3">
                        <p className="font-mono text-sm font-medium">get_info_from_id(id)</p>
                        <p className="mt-1 text-sm text-muted-foreground">Retrieves student information based on ID.</p>
                        <div className="mt-2">
                          <p className="text-xs font-medium">Parameters:</p>
                          <ul className="ml-4 list-disc text-xs text-muted-foreground">
                            <li>id: Student ID (string)</li>
                          </ul>
                        </div>
                        <div className="mt-2">
                          <p className="text-xs font-medium">Returns:</p>
                          <ul className="ml-4 list-disc text-xs text-muted-foreground">
                            <li>name: Student name</li>
                            <li>image: Student image</li>
                            <li>idx: Database index</li>
                          </ul>
                        </div>
                      </div>

                      <div className="rounded-md bg-muted p-3">
                        <p className="font-mono text-sm font-medium">deleteOne(id)</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Deletes a student record from the database.
                        </p>
                        <div className="mt-2">
                          <p className="text-xs font-medium">Parameters:</p>
                          <ul className="ml-4 list-disc text-xs text-muted-foreground">
                            <li>id: Student ID (string)</li>
                          </ul>
                        </div>
                        <div className="mt-2">
                          <p className="text-xs font-medium">Returns:</p>
                          <ul className="ml-4 list-disc text-xs text-muted-foreground">
                            <li>Boolean: True on success</li>
                          </ul>
                        </div>
                      </div>

                      <div className="rounded-md bg-muted p-3">
                        <p className="font-mono text-sm font-medium">build_dataset()</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Rebuilds the database from images in the dataset directory.
                        </p>
                        <div className="mt-2">
                          <p className="text-xs font-medium">Returns:</p>
                          <ul className="ml-4 list-disc text-xs text-muted-foreground">
                            <li>None</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Deployment */}
          <section id="deployment" className="scroll-mt-16">
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  <CardTitle>Deployment</CardTitle>
                </div>
                <CardDescription>Guidelines for deploying the system</CardDescription>
              </CardHeader>
              <CardContent className="prose max-w-none dark:prose-invert">
                <h3>Deployment Options</h3>
                <p>
                  The Face Recognition Attendance System can be deployed in various environments based on your
                  requirements:
                </p>

                <h4>Local Deployment</h4>
                <p>For small-scale use within a single department or classroom:</p>
                <ul>
                  <li>Install the system on a dedicated computer with a webcam</li>
                  <li>Configure the system to use the local webcam for face recognition</li>
                  <li>Set up the database to store student records locally</li>
                  <li>Ensure the computer has sufficient resources for face recognition processing</li>
                </ul>

                <h4>Network Deployment</h4>
                <p>For campus-wide deployment across multiple departments:</p>
                <ul>
                  <li>Set up a central server to host the database</li>
                  <li>Install client applications on computers in each classroom</li>
                  <li>Configure clients to connect to the central database</li>
                  <li>Implement user authentication for different departments</li>
                </ul>

                <h4>Cloud Deployment</h4>
                <p>For remote access and scalability:</p>
                <ul>
                  <li>Deploy the system on a cloud platform (e.g., AWS, Azure, GCP)</li>
                  <li>Set up a web interface for accessing the system remotely</li>
                  <li>Configure cloud storage for the database</li>
                  <li>Implement secure authentication and access controls</li>
                  <li>Set up backup and disaster recovery procedures</li>
                </ul>

                <h3>Hardware Requirements</h3>
                <p>The hardware requirements depend on the scale of deployment:</p>

                <div className="not-prose grid gap-4 sm:grid-cols-2">
                  <div className="rounded-md bg-muted p-3">
                    <p className="font-medium">Small Scale (1-50 students)</p>
                    <ul className="ml-4 list-disc text-sm text-muted-foreground">
                      <li>Standard desktop/laptop with webcam</li>
                      <li>Intel Core i5 or equivalent</li>
                      <li>8GB RAM</li>
                      <li>HD webcam (720p or higher)</li>
                    </ul>
                  </div>
                  <div className="rounded-md bg-muted p-3">
                    <p className="font-medium">Medium Scale (50-200 students)</p>
                    <ul className="ml-4 list-disc text-sm text-muted-foreground">
                      <li>High-performance desktop/server</li>
                      <li>Intel Core i7 or equivalent</li>
                      <li>16GB RAM</li>
                      <li>Full HD webcam (1080p)</li>
                      <li>SSD storage</li>
                    </ul>
                  </div>
                </div>

                <h3>Security Considerations</h3>
                <p>When deploying the system, consider the following security measures:</p>

                <ul>
                  <li>Implement user authentication and role-based access control</li>
                  <li>Encrypt sensitive data, especially student information</li>
                  <li>Secure the database with proper access controls</li>
                  <li>Regularly backup the database and configuration files</li>
                  <li>Keep the system updated with security patches</li>
                  <li>Implement audit logging for system activities</li>
                </ul>

                <h3>Maintenance</h3>
                <p>Regular maintenance is essential for optimal system performance:</p>

                <ul>
                  <li>Periodically update student records and face images</li>
                  <li>Clean up old attendance records as needed</li>
                  <li>Monitor system performance and resource usage</li>
                  <li>Backup the database regularly</li>
                  <li>Update the system software when new versions are available</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Resources */}
          <section id="resources" className="scroll-mt-16">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <CardTitle>Resources</CardTitle>
                </div>
                <CardDescription>Additional resources and references</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 text-lg font-medium">Documentation</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-lg border p-4">
                        <h4 className="font-medium">User Manual</h4>
                        <p className="mb-4 text-sm text-muted-foreground">Comprehensive guide for system users</p>
                        <Button variant="outline" className="w-full">
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h4 className="font-medium">Administrator Guide</h4>
                        <p className="mb-4 text-sm text-muted-foreground">Detailed guide for system administrators</p>
                        <Button variant="outline" className="w-full">
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </Button>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="mb-2 text-lg font-medium">External References</h3>
                    <div className="space-y-2">
                      <div className="rounded-md border p-3">
                        <h4 className="font-medium">Face Recognition Library</h4>
                        <p className="text-sm text-muted-foreground">
                          <a
                            href="https://github.com/ageitgey/face_recognition"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            https://github.com/ageitgey/face_recognition
                          </a>
                        </p>
                      </div>
                      <div className="rounded-md border p-3">
                        <h4 className="font-medium">OpenCV Documentation</h4>
                        <p className="text-sm text-muted-foreground">
                          <a
                            href="https://docs.opencv.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            https://docs.opencv.org/
                          </a>
                        </p>
                      </div>
                      <div className="rounded-md border p-3">
                        <h4 className="font-medium">Streamlit Documentation</h4>
                        <p className="text-sm text-muted-foreground">
                          <a
                            href="https://docs.streamlit.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            https://docs.streamlit.io/
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="mb-2 text-lg font-medium">Support</h3>
                    <div className="rounded-lg border p-4">
                      <p className="text-sm">For technical support or questions about the system, please contact:</p>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span>support@dsu.edu.in</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <a
                            href="https://github.com/datct00/Face-recognition-app-using-Streamlit/issues"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            Submit an issue on GitHub
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}
