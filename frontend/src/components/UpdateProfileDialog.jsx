import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'

const UpdateProfileDialog = ({ open, setOpen }) => {
    return (
        <div>
            <Dialog open={open}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Update Profile</DialogTitle>
                    </DialogHeader>
                    <form>
                        <div className='grid gap-4 py-4'>
                            
                            {/* Name Field */}
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="name" className="text-right">Name</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    className="col-span-3"
                                />
                            </div>

                            {/* Email Field */}
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="email" className="text-right">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="col-span-3"
                                />
                            </div>

                            {/* Number Field */}
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="number" className="text-right">Number</Label>
                                <Input
                                    id="number"
                                    name="number"
                                    type="text"
                                    className="col-span-3"
                                />
                            </div>

                            {/* Bio Field */}
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="bio" className="text-right">Bio</Label>
                                <Input
                                    id="bio"
                                    name="bio"
                                    type="text"
                                    className="col-span-3"
                                />
                            </div>

                            {/* Skills Field */}
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="skills" className="text-right">Skills</Label>
                                <Input
                                    id="skills"
                                    name="skills"
                                    type="text"
                                    className="col-span-3"
                                />
                            </div>

                            {/* Resume Field */}
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="resume" className="text-right">Resume</Label>
                                <Input
                                    id="resume"
                                    name="resume"
                                    type="file"
                                    accept="application/pdf"
                                    className="col-span-3 cursor-pointer"
                                />
                            </div>

                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default UpdateProfileDialog