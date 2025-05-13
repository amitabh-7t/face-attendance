import csv
import os
import datetime

def mark_attendance(student_id, student_name, status="present"):
    """
    Mark attendance for a student
    
    Args:
        student_id (str): Student ID
        student_name (str): Student name
        status (str): Attendance status (present, absent, late)
    
    Returns:
        bool: True if successful, False otherwise
    """
    # Create attendance directory if it doesn't exist
    if not os.path.exists('attendance'):
        os.makedirs('attendance')
    
    # Get current date
    today = datetime.datetime.now().strftime("%Y-%m-%d")
    
    # Create attendance file for today if it doesn't exist
    attendance_file = f"attendance/{today}.csv"
    file_exists = os.path.isfile(attendance_file)
    
    try:
        with open(attendance_file, 'a', newline='') as f:
            writer = csv.writer(f)
            
            # Write header if file doesn't exist
            if not file_exists:
                writer.writerow(['ID', 'Name', 'Time', 'Status'])
            
            # Write attendance record
            current_time = datetime.datetime.now().strftime("%H:%M:%S")
            writer.writerow([student_id, student_name, current_time, status])
        
        return True
    except Exception as e:
        print(f"Error marking attendance: {e}")
        return False

def get_attendance_report(date=None, student_id=None):
    """
    Get attendance report
    
    Args:
        date (str): Date in YYYY-MM-DD format (default: today)
        student_id (str): Student ID (default: all students)
    
    Returns:
        list: List of attendance records
    """
    # Get current date if not specified
    if date is None:
        date = datetime.datetime.now().strftime("%Y-%m-%d")
    
    # Check if attendance file exists
    attendance_file = f"attendance/{date}.csv"
    if not os.path.isfile(attendance_file):
        return []
    
    try:
        records = []
        with open(attendance_file, 'r') as f:
            reader = csv.DictReader(f)
            for row in reader:
                # Filter by student ID if specified
                if student_id is None or row['ID'] == student_id:
                    records.append(row)
        
        return records
    except Exception as e:
        print(f"Error getting attendance report: {e}")
        return []

def get_student_attendance_summary(student_id, start_date=None, end_date=None):
    """
    Get attendance summary for a student
    
    Args:
        student_id (str): Student ID
        start_date (str): Start date in YYYY-MM-DD format (default: 30 days ago)
        end_date (str): End date in YYYY-MM-DD format (default: today)
    
    Returns:
        dict: Attendance summary
    """
    # Set default dates if not specified
    if end_date is None:
        end_date = datetime.datetime.now().strftime("%Y-%m-%d")
    
    if start_date is None:
        start_date = (datetime.datetime.now() - datetime.timedelta(days=30)).strftime("%Y-%m-%d")
    
    # Convert dates to datetime objects
    start_dt = datetime.datetime.strptime(start_date, "%Y-%m-%d")
    end_dt = datetime.datetime.strptime(end_date, "%Y-%m-%d")
    
    # Initialize summary
    summary = {
        'student_id': student_id,
        'total_days': 0,
        'present': 0,
        'absent': 0,
        'late': 0,
        'attendance_percentage': 0,
        'dates': []
    }
    
    # Iterate through dates
    current_dt = start_dt
    while current_dt &lt;= end_dt:
        current_date = current_dt.strftime("%Y-%m-%d")
        
        # Get attendance for this date
        records = get_attendance_report(current_date, student_id)
        
        # Add to summary
        if records:
            summary['total_days'] += 1
            status = records[0]['Status']
            
            if status == 'present':
                summary['present'] += 1
            elif status == 'late':
                summary['late'] += 1
            else:
                summary['absent'] += 1
            
            summary['dates'].append({
                'date': current_date,
                'status': status,
                'time': records[0]['Time']
            })
        
        # Move to next day
        current_dt += datetime.timedelta(days=1)
    
    # Calculate attendance percentage
    if summary['total_days'] > 0:
        summary['attendance_percentage'] = round(
            (summary['present'] + summary['late']) / summary['total_days'] * 100, 2
        )
    
    return summary
