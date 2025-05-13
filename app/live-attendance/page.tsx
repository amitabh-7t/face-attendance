"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Camera, User, CheckCircle, XCircle, AlertCircle, RefreshCw, Upload } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { AttendanceStatus } from "@/components/attendance-status"

export default function LiveAttendancePage() {
  const [activeTab, setActiveTab] = useState("webcam")
  const [recognitionStatus, setRecognitionStatus] = useState<"idle" | "detecting" | "recognized" | "unknown">("idle")
  const [tolerance, setTolerance] = useState(0.5)
  const [logs, setLogs] = useState<
    Array<{
      id: number
      timestamp: Date
      name: string
      usn: string
      status: "present" | "unknown"
    }>
  >([])
  const videoRef = useRef<HTMLVideoElement>(null)
  const [stream, setStream] = useState<MediaStream | null>(null)
  const [isWebcamActive, setIsWebcamActive] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  // Simulated student data
  const [currentStudent, setCurrentStudent] = useState<{
    name: string
    usn: string
    branch: string
    image: string
  } | null>(null)

  // Start webcam
  const startWebcam = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480 },
      })
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream
      }
      setStream(mediaStream)
      setIsWebcamActive(true)

      // Simulate face detection after 2 seconds
      setTimeout(() => {
        setRecognitionStatus("detecting")

        // Simulate face recognition after another 1.5 seconds
        setTimeout(() => {
          const recognized = Math.random() > 0.3
          setRecognitionStatus(recognized ? "recognized" : "unknown")

          if (recognized) {
            const student = {
              name: "Rahul Sharma",
              usn: "1DS19CS101",
              branch: "Computer Science",
              image: "/placeholder.svg?height=100&width=100",
            }
            setCurrentStudent(student)

            // Add to logs
            setLogs((prev) => [
              {
                id: Date.now(),
                timestamp: new Date(),
                name: student.name,
                usn: student.usn,
                status: "present",
              },
              ...prev,
            ])
          } else {
            setLogs((prev) => [
              {
                id: Date.now(),
                timestamp: new Date(),
                name: "Unknown",
                usn: "N/A",
                status: "unknown",
              },
              ...prev,
            ])
          }
        }, 1500)
      }, 2000)
    } catch (error) {
      console.error("Error accessing webcam:", error)
    }
  }

  // Stop webcam
  const stopWebcam = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop())
      setStream(null)
    }
    setIsWebcamActive(false)
    setRecognitionStatus("idle")
    setCurrentStudent(null)
  }

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setSelectedFile(file)

      // Create preview URL
      const fileUrl = URL.createObjectURL(file)
      setPreviewUrl(fileUrl)

      // Simulate processing
      setRecognitionStatus("detecting")

      // Simulate recognition after 2 seconds
      setTimeout(() => {
        const recognized = Math.random() > 0.3
        setRecognitionStatus(recognized ? "recognized" : "unknown")

        if (recognized) {
          const student = {
            name: "Priya Patel",
            usn: "1DS19CS045",
            branch: "Computer Science",
            image: "/placeholder.svg?height=100&width=100",
          }
          setCurrentStudent(student)

          // Add to logs
          setLogs((prev) => [
            {
              id: Date.now(),
              timestamp: new Date(),
              name: student.name,
              usn: student.usn,
              status: "present",
            },
            ...prev,
          ])
        } else {
          setLogs((prev) => [
            {
              id: Date.now(),
              timestamp: new Date(),
              name: "Unknown",
              usn: "N/A",
              status: "unknown",
            },
            ...prev,
          ])
        }
      }, 2000)
    }
  }

  // Reset file upload
  const resetFileUpload = () => {
    setSelectedFile(null)
    setPreviewUrl(null)
    setRecognitionStatus("idle")
    setCurrentStudent(null)
  }

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop())
      }
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl)
      }
    }
  }, [stream, previewUrl])

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Live Attendance</h1>
        <p className="text-muted-foreground">Track attendance in real-time using facial recognition</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="webcam">
                <Camera className="mr-2 h-4 w-4" />
                Webcam
              </TabsTrigger>
              <TabsTrigger value="upload">
                <Upload className="mr-2 h-4 w-4" />
                Upload Image
              </TabsTrigger>
            </TabsList>
            <TabsContent value="webcam" className="mt-4">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle>Webcam Capture</CardTitle>
                  <CardDescription>Use your webcam to capture and recognize faces</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
                    {isWebcamActive ? (
                      <>
                        <video ref={videoRef} autoPlay playsInline muted className="h-full w-full object-cover" />
                        <div className="absolute bottom-4 right-4">
                          <AttendanceStatus status={recognitionStatus} />
                        </div>
                      </>
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center">
                        <Camera className="mb-4 h-16 w-16 text-muted-foreground" />
                        <p className="text-center text-muted-foreground">Webcam is currently inactive</p>
                      </div>
                    )}
                  </div>
                  <div className="mt-4 flex justify-center">
                    {!isWebcamActive ? (
                      <Button onClick={startWebcam}>
                        <Camera className="mr-2 h-4 w-4" />
                        Start Webcam
                      </Button>
                    ) : (
                      <Button variant="destructive" onClick={stopWebcam}>
                        <XCircle className="mr-2 h-4 w-4" />
                        Stop Webcam
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="upload" className="mt-4">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle>Image Upload</CardTitle>
                  <CardDescription>Upload an image to recognize faces</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
                    {previewUrl ? (
                      <>
                        <img
                          src={previewUrl || "/placeholder.svg"}
                          alt="Uploaded image"
                          className="h-full w-full object-contain"
                        />
                        <div className="absolute bottom-4 right-4">
                          <AttendanceStatus status={recognitionStatus} />
                        </div>
                      </>
                    ) : (
                      <label
                        htmlFor="image-upload"
                        className="flex h-full cursor-pointer flex-col items-center justify-center"
                      >
                        <Upload className="mb-4 h-16 w-16 text-muted-foreground" />
                        <p className="text-center text-muted-foreground">Click to upload an image or drag and drop</p>
                        <input
                          id="image-upload"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleFileChange}
                        />
                      </label>
                    )}
                  </div>
                  {previewUrl && (
                    <div className="mt-4 flex justify-center">
                      <Button variant="outline" onClick={resetFileUpload}>
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Upload Another Image
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Settings Card */}
          <Card className="mt-8">
            <CardHeader className="pb-4">
              <CardTitle>Recognition Settings</CardTitle>
              <CardDescription>Adjust parameters for face recognition</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="tolerance">Recognition Tolerance: {tolerance.toFixed(2)}</Label>
                    <span className="text-sm text-muted-foreground">
                      {tolerance < 0.4 ? "Strict" : tolerance > 0.7 ? "Lenient" : "Balanced"}
                    </span>
                  </div>
                  <Slider
                    id="tolerance"
                    min={0}
                    max={1}
                    step={0.01}
                    value={[tolerance]}
                    onValueChange={(value) => setTolerance(value[0])}
                  />
                  <p className="text-xs text-muted-foreground">
                    Lower values require a more exact match, higher values are more permissive
                  </p>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="auto-mark">Auto-mark Attendance</Label>
                    <p className="text-xs text-muted-foreground">
                      Automatically mark attendance when a face is recognized
                    </p>
                  </div>
                  <Switch id="auto-mark" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="notifications">Sound Notifications</Label>
                    <p className="text-xs text-muted-foreground">Play a sound when attendance is marked</p>
                  </div>
                  <Switch id="notifications" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          {/* Student Info Card */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle>Student Information</CardTitle>
              <CardDescription>Details of the recognized student</CardDescription>
            </CardHeader>
            <CardContent>
              {currentStudent ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 overflow-hidden rounded-full bg-muted">
                      <img
                        src={currentStudent.image || "/placeholder.svg"}
                        alt={currentStudent.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{currentStudent.name}</h3>
                      <p className="text-sm text-muted-foreground">{currentStudent.usn}</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Branch:</span>
                      <span className="text-sm font-medium">{currentStudent.branch}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Status:</span>
                      <Badge variant="success">Present</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Time:</span>
                      <span className="text-sm font-medium">{new Date().toLocaleTimeString()}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-center">
                    <Button variant="outline" size="sm">
                      <User className="mr-2 h-4 w-4" />
                      View Full Profile
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <User className="mb-2 h-12 w-12 text-muted-foreground" />
                  <h3 className="font-semibold">No Student Detected</h3>
                  <p className="text-sm text-muted-foreground">
                    Student information will appear here when a face is recognized
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Attendance Logs */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle>Attendance Logs</CardTitle>
              <CardDescription>Recent attendance activity</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] pr-4">
                {logs.length > 0 ? (
                  <div className="space-y-4">
                    {logs.map((log) => (
                      <motion.div
                        key={log.id}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 rounded-lg border p-3"
                      >
                        {log.status === "present" ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-amber-500" />
                        )}
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">{log.name}</p>
                            <span className="text-xs text-muted-foreground">{log.timestamp.toLocaleTimeString()}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {log.status === "present" ? `Marked present (${log.usn})` : "Unrecognized face"}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <p className="text-sm text-muted-foreground">No attendance logs yet</p>
                  </div>
                )}
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
