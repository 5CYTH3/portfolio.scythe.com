<script lang="ts">
    let className;
    export { className as class };
</script>

<!--
@component
Wrapper for Side categories.
-->

<div class="{className} h-full w-64 dark:bg-primary-dark-90 pl-6 pt-6">
    <slot />
</div>
