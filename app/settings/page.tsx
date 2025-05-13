"use client"

import { useState } from "react"
import { Save, Upload, Trash2, RefreshCw, Camera, Database, Bell, User, Mail, Key, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { toast } from "sonner"

// Form schema for user profile
const profileFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  role: z.string({
    required_error: "Please select a role.",
  }),
})

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general")

  // Form for user profile
  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: "Admin User",
      email: "admin@dsu.edu.in",
      role: "admin",
    },
  })

  function onSubmit(values: z.infer<typeof profileFormSchema>) {
    toast.success("Profile updated successfully")
  }

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Configure system parameters and user accounts</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">
            <Camera className="mr-2 h-4 w-4" />
            General
          </TabsTrigger>
          <TabsTrigger value="database">
            <Database className="mr-2 h-4 w-4" />
            Database
          </TabsTrigger>
          <TabsTrigger value="account">
            <User className="mr-2 h-4 w-4" />
            Account
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>Recognition Settings</CardTitle>
              <CardDescription>Configure face recognition parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="tolerance">Recognition Tolerance</Label>
                  <span className="text-sm">0.5</span>
                </div>
                <Slider id="tolerance" defaultValue={[0.5]} max={1} step={0.01} className="w-full" />
                <p className="text-sm text-muted-foreground">
                  Lower values require a more exact match, higher values are more permissive
                </p>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="camera-source">Camera Source</Label>
                <Select defaultValue="0">
                  <SelectTrigger id="camera-source">
                    <SelectValue placeholder="Select camera" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">Default Camera (0)</SelectItem>
                    <SelectItem value="1">External Camera (1)</SelectItem>
                    <SelectItem value="2">USB Camera (2)</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">Select the camera source for face recognition</p>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="auto-mark">Auto-mark Attendance</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically mark attendance when a face is recognized
                    </p>
                  </div>
                  <Switch id="auto-mark" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="show-preview">Show Camera Preview</Label>
                    <p className="text-sm text-muted-foreground">Display camera preview during recognition</p>
                  </div>
                  <Switch id="show-preview" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="sound-notification">Sound Notifications</Label>
                    <p className="text-sm text-muted-foreground">Play a sound when attendance is marked</p>
                  </div>
                  <Switch id="sound-notification" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Reset to Defaults</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Database Settings */}
        <TabsContent value="database">
          <Card>
            <CardHeader>
              <CardTitle>Database Management</CardTitle>
              <CardDescription>Manage student database and records</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Database Statistics</Label>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-lg border p-4">
                    <div className="text-sm text-muted-foreground">Total Students</div>
                    <div className="mt-1 text-2xl font-bold">128</div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="text-sm text-muted-foreground">Total Records</div>
                    <div className="mt-1 text-2xl font-bold">1,245</div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="text-sm text-muted-foreground">Last Updated</div>
                    <div className="mt-1 text-2xl font-bold">Today</div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Backup and Restore</Label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <h3 className="mb-2 font-medium">Backup Database</h3>
                    <p className="mb-4 text-sm text-muted-foreground">Create a backup of the current database</p>
                    <Button variant="outline" className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download Backup
                    </Button>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="mb-2 font-medium">Restore Database</h3>
                    <p className="mb-4 text-sm text-muted-foreground">Restore from a previous backup</p>
                    <Button variant="outline" className="w-full">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Backup
                    </Button>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Database Actions</Label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <h3 className="mb-2 font-medium">Rebuild Database</h3>
                    <p className="mb-4 text-sm text-muted-foreground">Rebuild the database from source images</p>
                    <Button variant="outline" className="w-full">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Rebuild Database
                    </Button>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="mb-2 font-medium">Clear All Records</h3>
                    <p className="mb-4 text-sm text-muted-foreground">Delete all attendance records</p>
                    <Button variant="destructive" className="w-full">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Clear Records
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Account Settings */}
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account information</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="flex flex-col items-center justify-center sm:flex-row sm:items-start sm:gap-8">
                    <div className="mb-4 flex flex-col items-center sm:mb-0">
                      <div className="relative h-24 w-24">
                        <img
                          src="/placeholder.svg?height=96&width=96"
                          alt="Profile"
                          className="rounded-full object-cover"
                        />
                        <Button
                          size="icon"
                          variant="outline"
                          className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-background"
                        >
                          <Camera className="h-4 w-4" />
                          <span className="sr-only">Change profile picture</span>
                        </Button>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">Profile Picture</p>
                    </div>
                    <div className="w-full space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <div className="flex items-center">
                                <User className="mr-2 h-4 w-4 text-muted-foreground" />
                                <Input {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <div className="flex items-center">
                                <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                                <Input {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Role</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a role" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="admin">Administrator</SelectItem>
                                <SelectItem value="teacher">Teacher</SelectItem>
                                <SelectItem value="staff">Staff</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Security</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-lg border p-4">
                        <h4 className="mb-2 font-medium">Change Password</h4>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Key className="mr-2 h-4 w-4 text-muted-foreground" />
                            <Input type="password" placeholder="Current password" />
                          </div>
                          <div className="flex items-center">
                            <Key className="mr-2 h-4 w-4 text-muted-foreground" />
                            <Input type="password" placeholder="New password" />
                          </div>
                          <div className="flex items-center">
                            <Key className="mr-2 h-4 w-4 text-muted-foreground" />
                            <Input type="password" placeholder="Confirm new password" />
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h4 className="mb-2 font-medium">Two-Factor Authentication</h4>
                        <p className="mb-4 text-sm text-muted-foreground">
                          Add an extra layer of security to your account
                        </p>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="2fa">Enable 2FA</Label>
                          <Switch id="2fa" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2">
                    <Button type="button" variant="outline">
                      Cancel
                    </Button>
                    <Button type="submit">
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email Notifications</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="email-attendance">Attendance Reports</Label>
                      <p className="text-sm text-muted-foreground">Receive daily attendance reports via email</p>
                    </div>
                    <Switch id="email-attendance" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="email-alerts">Low Attendance Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Get notified when a student's attendance falls below 75%
                      </p>
                    </div>
                    <Switch id="email-alerts" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="email-system">System Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive system updates and maintenance notifications
                      </p>
                    </div>
                    <Switch id="email-system" />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">In-App Notifications</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="app-recognition">Recognition Events</Label>
                      <p className="text-sm text-muted-foreground">Show notifications for face recognition events</p>
                    </div>
                    <Switch id="app-recognition" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="app-updates">System Updates</Label>
                      <p className="text-sm text-muted-foreground">Show notifications for system updates</p>
                    </div>
                    <Switch id="app-updates" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="app-sound">Sound Effects</Label>
                      <p className="text-sm text-muted-foreground">Play sound effects for notifications</p>
                    </div>
                    <Switch id="app-sound" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Reset to Defaults</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
