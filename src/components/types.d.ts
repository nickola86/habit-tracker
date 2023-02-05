/*
VIEWS
*/
export interface HabitButtonProps {
    habit: Habit
}
export interface HabitsCarouselProps {
    habits?: Habit[]
    elementsPerPage: number
}

/*
COMPONENTS
*/
export interface Route{
    pageName: string
    path: string
    requiresAuthentication: boolean
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
}

type CategoryType = "wellness" | "health" | "sport";
type RecurrencyType = "daily" | "weekly" | "monthly";
type GoalBaseType = "daily" | "weekly" | "monthly";
type CalendarItem = {
    date: Date
    targetValue: number
    actualValue: number
}

export interface Habit {
    id?: number
	userId?: number
	icon: string
	title: string
	color: string
	startDate?: Date
	endDate?: Date
	reminderMessage?: string
    category?: CategoryType
	recurrency?: RecurrencyType
	goalBase?: GoalBaseType
	calendar?: CalendarItem[]
}

export interface Chart {
    title: string,
    svg: SVGElement,
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