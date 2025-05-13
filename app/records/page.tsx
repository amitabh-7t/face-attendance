"use client"

import { useState } from "react"
import { Search, Filter, Download, Calendar, User, BookOpen, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Sample data
const students = [
  {
    id: 1,
    name: "Rahul Sharma",
    usn: "1DS19CS101",
    branch: "Computer Science",
    attendance: 85,
    lastAttendance: "2023-05-12T09:30:00",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Priya Patel",
    usn: "1DS19CS045",
    branch: "Computer Science",
    attendance: 92,
    lastAttendance: "2023-05-12T10:15:00",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Amit Kumar",
    usn: "1DS19EC022",
    branch: "Electronics",
    attendance: 78,
    lastAttendance: "2023-05-12T09:45:00",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    usn: "1DS19ME056",
    branch: "Mechanical",
    attendance: 90,
    lastAttendance: "2023-05-12T11:00:00",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "Vikram Singh",
    usn: "1DS19CS078",
    branch: "Computer Science",
    attendance: 65,
    lastAttendance: "2023-05-11T14:30:00",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 6,
    name: "Neha Gupta",
    usn: "1DS19BT033",
    branch: "Biotechnology",
    attendance: 88,
    lastAttendance: "2023-05-12T09:15:00",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 7,
    name: "Karthik R",
    usn: "1DS19CS042",
    branch: "Computer Science",
    attendance: 72,
    lastAttendance: "2023-05-12T10:45:00",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 8,
    name: "Divya Sharma",
    usn: "1DS19EC015",
    branch: "Electronics",
    attendance: 95,
    lastAttendance: "2023-05-12T09:30:00",
    image: "/placeholder.svg?height=40&width=40",
  },
]

// Sample attendance history
const attendanceHistory = [
  { date: "2023-05-12", status: "present", time: "09:30:00" },
  { date: "2023-05-11", status: "present", time: "10:15:00" },
  { date: "2023-05-10", status: "present", time: "09:45:00" },
  { date: "2023-05-09", status: "absent", time: null },
  { date: "2023-05-08", status: "present", time: "10:00:00" },
  { date: "2023-05-05", status: "present", time: "09:30:00" },
  { date: "2023-05-04", status: "present", time: "09:15:00" },
  { date: "2023-05-03", status: "absent", time: null },
  { date: "2023-05-02", status: "present", time: "10:30:00" },
  { date: "2023-05-01", status: "present", time: "09:45:00" },
]

export default function RecordsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedBranch, setSelectedBranch] = useState<string>("all")
  const [selectedStudent, setSelectedStudent] = useState<(typeof students)[0] | null>(null)

  // Filter students based on search query and branch
  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.usn.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesBranch = selectedBranch === "all" || student.branch === selectedBranch

    return matchesSearch && matchesBranch
  })

  // Get unique branches for filter
  const branches = Array.from(new Set(students.map((student) => student.branch)))

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Student Records</h1>
        <p className="text-muted-foreground">View and manage student attendance records</p>
      </div>

      <Card className="mb-8">
        <CardHeader className="pb-4">
          <CardTitle>Attendance Overview</CardTitle>
          <CardDescription>Summary of student attendance records</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">Total Students</span>
              </div>
              <p className="mt-2 text-3xl font-bold">{students.length}</p>
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">Today's Attendance</span>
              </div>
              <p className="mt-2 text-3xl font-bold">85%</p>
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">Average Attendance</span>
              </div>
              <p className="mt-2 text-3xl font-bold">83%</p>
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">Below 75%</span>
              </div>
              <p className="mt-2 text-3xl font-bold">2</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-4">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <CardTitle>Student Records</CardTitle>
              <CardDescription>View and manage student attendance data</CardDescription>
            </div>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Data
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-6 flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name or USN..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Select value={selectedBranch} onValueChange={setSelectedBranch}>
                <SelectTrigger className="w-[180px]">
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    <SelectValue placeholder="Filter by branch" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Branches</SelectItem>
                  {branches.map((branch) => (
                    <SelectItem key={branch} value={branch}>
                      {branch}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>USN</TableHead>
                  <TableHead>Branch</TableHead>
                  <TableHead className="text-right">Attendance %</TableHead>
                  <TableHead>Last Attendance</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 overflow-hidden rounded-full">
                            <img
                              src={student.image || "/placeholder.svg"}
                              alt={student.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <span className="font-medium">{student.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{student.usn}</TableCell>
                      <TableCell>{student.branch}</TableCell>
                      <TableCell className="text-right">
                        <Badge variant={student.attendance < 75 ? "destructive" : "outline"}>
                          {student.attendance}%
                        </Badge>
                      </TableCell>
                      <TableCell>{new Date(student.lastAttendance).toLocaleString()}</TableCell>
                      <TableCell className="text-right">
                        <Dialog>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Actions</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DialogTrigger asChild>
                                <DropdownMenuItem onClick={() => setSelectedStudent(student)}>
                                  View Details
                                </DropdownMenuItem>
                              </DialogTrigger>
                              <DropdownMenuItem>Edit Record</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">Delete Record</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>

                          <DialogContent className="sm:max-w-[600px]">
                            {selectedStudent && (
                              <>
                                <DialogHeader>
                                  <DialogTitle>Student Details</DialogTitle>
                                  <DialogDescription>Detailed information and attendance history</DialogDescription>
                                </DialogHeader>

                                <div className="mt-4 grid gap-6 sm:grid-cols-[1fr_2fr]">
                                  <div className="flex flex-col items-center gap-4">
                                    <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-primary/10">
                                      <img
                                        src={selectedStudent.image.replace("40", "128") || "/placeholder.svg"}
                                        alt={selectedStudent.name}
                                        className="h-full w-full object-cover"
                                      />
                                    </div>
                                    <div className="text-center">
                                      <h3 className="text-xl font-bold">{selectedStudent.name}</h3>
                                      <p className="text-muted-foreground">{selectedStudent.usn}</p>
                                    </div>
                                    <Badge
                                      variant={selectedStudent.attendance < 75 ? "destructive" : "outline"}
                                      className="px-3 py-1 text-sm"
                                    >
                                      {selectedStudent.attendance}% Attendance
                                    </Badge>
                                  </div>

                                  <div>
                                    <Accordion type="single" collapsible defaultValue="details">
                                      <AccordionItem value="details">
                                        <AccordionTrigger>Student Information</AccordionTrigger>
                                        <AccordionContent>
                                          <div className="space-y-2">
                                            <div className="flex justify-between">
                                              <span className="text-sm text-muted-foreground">Branch:</span>
                                              <span className="text-sm font-medium">{selectedStudent.branch}</span>
                                            </div>
                                            <div className="flex justify-between">
                                              <span className="text-sm text-muted-foreground">USN:</span>
                                              <span className="text-sm font-medium">{selectedStudent.usn}</span>
                                            </div>
                                            <div className="flex justify-between">
                                              <span className="text-sm text-muted-foreground">Last Attendance:</span>
                                              <span className="text-sm font-medium">
                                                {new Date(selectedStudent.lastAttendance).toLocaleString()}
                                              </span>
                                            </div>
                                          </div>
                                        </AccordionContent>
                                      </AccordionItem>

                                      <AccordionItem value="attendance">
                                        <AccordionTrigger>Attendance History</AccordionTrigger>
                                        <AccordionContent>
                                          <div className="max-h-[300px] overflow-y-auto pr-2">
                                            <Table>
                                              <TableHeader>
                                                <TableRow>
                                                  <TableHead>Date</TableHead>
                                                  <TableHead>Status</TableHead>
                                                  <TableHead>Time</TableHead>
                                                </TableRow>
                                              </TableHeader>
                                              <TableBody>
                                                {attendanceHistory.map((record, index) => (
                                                  <TableRow key={index}>
                                                    <TableCell>{record.date}</TableCell>
                                                    <TableCell>
                                                      <Badge
                                                        variant={
                                                          record.status === "present" ? "outline" : "destructive"
                                                        }
                                                      >
                                                        {record.status === "present" ? "Present" : "Absent"}
                                                      </Badge>
                                                    </TableCell>
                                                    <TableCell>{record.time || "-"}</TableCell>
                                                  </TableRow>
                                                ))}
                                              </TableBody>
                                            </Table>
                                          </div>
                                        </AccordionContent>
                                      </AccordionItem>
                                    </Accordion>
                                  </div>
                                </div>

                                <div className="mt-4 flex justify-end gap-2">
                                  <Button variant="outline">Edit Record</Button>
                                  <Button>Download Report</Button>
                                </div>
                              </>
                            )}
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center">
                      No results found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          <div className="mt-4">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
