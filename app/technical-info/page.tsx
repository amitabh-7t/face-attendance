import { Package, Code, FileCode, GitBranch, Layers } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function TechnicalInfoPage() {
  // Python packages used in the system
  const pythonPackages = [
    { name: "OpenCV", version: "4.7.0", description: "Computer vision library for image processing" },
    { name: "face_recognition", version: "1.3.0", description: "Face recognition library built on dlib" },
    { name: "dlib", version: "19.24.0", description: "Machine learning toolkit with facial recognition capabilities" },
    { name: "NumPy", version: "1.24.2", description: "Numerical computing library for array operations" },
    { name: "SQLite3", version: "3.41.2", description: "Embedded SQL database engine" },
    { name: "Streamlit", version: "1.22.0", description: "Framework for creating web applications" },
    { name: "Pickle", version: "4.0", description: "Python object serialization" },
    { name: "YAML", version: "6.0", description: "YAML parser and emitter for Python" },
  ]

  // System architecture components
  const systemComponents = [
    { name: "Frontend", technology: "Next.js", description: "React framework for building the user interface" },
    { name: "Backend", technology: "Python", description: "Core face recognition and data processing" },
    { name: "Database", technology: "SQLite", description: "Local database for storing student records" },
    { name: "Face Recognition", technology: "face_recognition + dlib", description: "Face detection and recognition" },
    { name: "Image Processing", technology: "OpenCV", description: "Camera feed processing and image manipulation" },
    { name: "Configuration", technology: "YAML", description: "System configuration and settings" },
  ]

  // File structure
  const fileStructure = [
    { name: "Tracking.py", role: "Main application file for real-time tracking" },
    { name: "utils.py", role: "Utility functions for face recognition and database operations" },
    { name: "config.yaml", role: "Configuration settings for the application" },
    { name: "pages/1_🔧_Updating.py", role: "Page for adding, updating, and deleting student records" },
    { name: "pages/2_💾_Database.py", role: "Page for viewing the database" },
    { name: "dataset/", role: "Directory containing student face images" },
    { name: "dataset/database.pkl", role: "Serialized database file" },
  ]

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Technical Information</h1>
        <p className="text-muted-foreground">Technical details and architecture of the face recognition system</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Python Packages */}
        <Card>
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2">
              <Package className="h-5 w-5 text-primary" />
              <CardTitle>Python Packages</CardTitle>
            </div>
            <CardDescription>Core libraries and dependencies used in the system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Package</TableHead>
                    <TableHead>Version</TableHead>
                    <TableHead className="hidden md:table-cell">Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pythonPackages.map((pkg) => (
                    <TableRow key={pkg.name}>
                      <TableCell className="font-medium">{pkg.name}</TableCell>
                      <TableCell>{pkg.version}</TableCell>
                      <TableCell className="hidden md:table-cell">{pkg.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* System Architecture */}
        <Card>
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-primary" />
              <CardTitle>System Architecture</CardTitle>
            </div>
            <CardDescription>Components and technologies used in the system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Component</TableHead>
                    <TableHead>Technology</TableHead>
                    <TableHead className="hidden md:table-cell">Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {systemComponents.map((component) => (
                    <TableRow key={component.name}>
                      <TableCell className="font-medium">{component.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{component.technology}</Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">{component.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {/* Model Architecture */}
        <Card>
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2">
              <Code className="h-5 w-5 text-primary" />
              <CardTitle>Model Architecture</CardTitle>
            </div>
            <CardDescription>Face recognition model architecture and workflow</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border p-4">
              <h3 className="mb-4 text-lg font-medium">Face Recognition Workflow</h3>

              <div className="mb-6 space-y-4">
                <div className="rounded-md bg-muted p-3">
                  <h4 className="font-medium">1. Face Detection</h4>
                  <p className="text-sm text-muted-foreground">
                    Using HOG (Histogram of Oriented Gradients) to detect faces in images
                  </p>
                </div>

                <div className="rounded-md bg-muted p-3">
                  <h4 className="font-medium">2. Face Landmark Detection</h4>
                  <p className="text-sm text-muted-foreground">
                    Identifying 68 specific points (landmarks) on each face
                  </p>
                </div>

                <div className="rounded-md bg-muted p-3">
                  <h4 className="font-medium">3. Face Encoding</h4>
                  <p className="text-sm text-muted-foreground">
                    Converting face to 128-dimensional vector using neural network
                  </p>
                </div>

                <div className="rounded-md bg-muted p-3">
                  <h4 className="font-medium">4. Face Comparison</h4>
                  <p className="text-sm text-muted-foreground">Comparing face encodings using Euclidean distance</p>
                </div>
              </div>

              <div className="rounded-md bg-primary/10 p-3">
                <h4 className="font-medium">Model Details</h4>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Based on ResNet architecture with 29 convolutional layers</li>
                  <li>• Trained on over 3 million face images</li>
                  <li>• 99.38% accuracy on Labeled Faces in the Wild benchmark</li>
                  <li>• Produces 128-dimensional face embeddings</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* File Structure */}
        <Card>
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2">
              <FileCode className="h-5 w-5 text-primary" />
              <CardTitle>File Structure</CardTitle>
            </div>
            <CardDescription>Key files and their roles in the system</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="core-files">
                <AccordionTrigger>Core Files</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {fileStructure.slice(0, 3).map((file) => (
                      <div key={file.name} className="rounded-md border p-3">
                        <div className="font-mono text-sm font-medium">{file.name}</div>
                        <div className="text-sm text-muted-foreground">{file.role}</div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="page-files">
                <AccordionTrigger>Page Files</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {fileStructure.slice(3, 5).map((file) => (
                      <div key={file.name} className="rounded-md border p-3">
                        <div className="font-mono text-sm font-medium">{file.name}</div>
                        <div className="text-sm text-muted-foreground">{file.role}</div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="data-files">
                <AccordionTrigger>Data Files</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {fileStructure.slice(5).map((file) => (
                      <div key={file.name} className="rounded-md border p-3">
                        <div className="font-mono text-sm font-medium">{file.name}</div>
                        <div className="text-sm text-muted-foreground">{file.role}</div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>

      {/* System Flowchart */}
      <Card className="mt-8">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-2">
            <GitBranch className="h-5 w-5 text-primary" />
            <CardTitle>System Flowchart</CardTitle>
          </div>
          <CardDescription>Visual representation of the system workflow</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-auto">
            <div className="min-w-[600px]">
              {/* Flowchart using Mermaid */}
              <div className="rounded-lg border p-4">
                <img
                  src="/placeholder.svg?height=400&width=800&text=System+Flowchart"
                  alt="System Flowchart"
                  className="mx-auto"
                />
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-md bg-muted p-4">
                  <h3 className="mb-2 font-medium">Face Recognition Process</h3>
                  <ol className="ml-4 list-decimal space-y-1 text-sm">
                    <li>Capture image from webcam or file upload</li>
                    <li>Detect faces in the image</li>
                    <li>Extract face encodings</li>
                    <li>Compare with database encodings</li>
                    <li>Identify matching student</li>
                    <li>Mark attendance in database</li>
                  </ol>
                </div>

                <div className="rounded-md bg-muted p-4">
                  <h3 className="mb-2 font-medium">Database Operations</h3>
                  <ol className="ml-4 list-decimal space-y-1 text-sm">
                    <li>Load student records from database</li>
                    <li>Update attendance records</li>
                    <li>Generate attendance reports</li>
                    <li>Backup and restore functionality</li>
                    <li>Add/update/delete student records</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
