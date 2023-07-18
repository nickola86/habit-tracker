/*
VIEWS
*/
export interface HabitButtonProps {
  habit: THabit
}
export interface BadgeProps {
  icon: string,
  title: string,
   description: string
}

export interface HabitsCarouselProps {
  habits?: THabit[]
  elementsPerPage: number
}

export interface MonthCalendarProps {
  calendarItems: CalendarItem[]
  color: string | undefined
}

/*
COMPONENTS
*/
export interface Route{
    pageName: string
    path: string
    isHiddenPage: boolean
    action?:function,
    icon?:Element
}

export interface User{
    id?: number
	  username?: string
    password?: string
    isUserLoggedIn?: boolean
    loginSuccess?: boolean
    bearer?: string
    signupdate?: Date
}

export interface Badge{
  icon: string
  userId: number
  title: string
  description: string
}
type CategoryType = "wellness" | "health" | "sport";
type RecurrencyType = "daily" | "weekly" | "monthly";
type GoalBaseType = "daily" | "weekly" | "monthly";
type CalendarItem = {
    date: Date
    targetValue: number
    actualValue: number
}

export interface THabit {
  id?: number
  userId?: number
  icon?: string
  title?: string
  color?: string
  startDate?: Date
  endDate?: Date
  reminderMessage?: string
  category?: CategoryType
  recurrency?: RecurrencyType
  goalBase?: GoalBaseType
  calendar?: CalendarItem[]
}


export interface TWidget {
  id?: number
  title?: string
  type?: string

}


export interface Chart {
  title: string,
  type: string,
  data: [],
  svg?: SVGElement,
}

type SettingCategoryType = "graphics" | "components";
export interface Settings{
    settings: Setting[]
}
export interface Setting{
    name: string
    value: any
    category: SettingCategoryType
}



export interface HabitTrackerRoute{
  path: string,
  element: JSX.Element,
  isProtected: boolean
}